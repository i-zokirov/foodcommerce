import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    UseGuards,
    NotFoundException,
    Query,
} from "@nestjs/common";
import { ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { MenuItemsService } from "../menu_items/menu_items.service";
import { OrderItem } from "./entities/order_item.entity";
import CurrentRestaurant from "../decorators/current-restaurant.decorator";
import { Restaurant } from "../restaurants/entities/restaurant.entity";
import { OrderItemOption } from "./entities/order_item_option.entity";
import { OrderItemOptionsService } from "./order_item_options.service";
import { Order } from "./entities/order.entity";
import CurrentUser from "../decorators/current-user.decorator";
import { User } from "../users/entities/user.entity";
import { OrderItemsService } from "./order_items.service";
import Serialize from "src/interceptors/serialize.interceptor";
import { OrderDto } from "./dto/order.dto";
import { VerifyRestaurantManager } from "src/interceptors/verify-restaurant-manager.interceptor";
import MerchantGuard from "src/guards/merchant.guard";

@Controller("orders")
@Serialize(OrderDto)
@ApiBearerAuth("JWT")
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly orderItemsService: OrderItemsService,
        private readonly orderItemOptionsService: OrderItemOptionsService,
        private readonly menuItemsService: MenuItemsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @ApiParam({ type: "string", name: "restaurantId" })
    @Post("/restaurants/:restaurantId")
    async create(
        @CurrentUser() user: User,
        @CurrentRestaurant() restaurant: Restaurant,
        @Body() createOrderDto: CreateOrderDto
    ) {
        const orderItemOptions = [];
        const orderItems: Partial<OrderItem>[] = await Promise.all(
            createOrderDto.order_items.map(async (item) => {
                const menuItem = await this.menuItemsService.findOne(
                    restaurant.id,
                    item.menu_item_id
                );
                if (!menuItem) {
                    throw new NotFoundException("Offer not found!");
                }
                if (
                    menuItem.menu_item_options &&
                    menuItem.menu_item_options.length
                ) {
                    for (let option of item.menu_item_options) {
                        const index = menuItem.menu_item_options.findIndex(
                            (el) => el.id === option.menu_item_option_id
                        );

                        if (index >= 0) {
                            orderItemOptions.push({
                                name: menuItem.menu_item_options[index].name,
                                price: menuItem.menu_item_options[index].price,
                                menu_item_option:
                                    menuItem.menu_item_options[index],
                                menu_item: menuItem,
                            });
                        }
                    }
                }
                const orderItem: Partial<OrderItem> = {
                    name: menuItem.name,
                    price: menuItem.price,
                    quantity: item.quantity ? item.quantity : 1,
                    menu_item: menuItem,
                };
                return orderItem;
            })
        );
        const totalOrderItemsprice = orderItems.reduce(
            (prev, current) => prev + current.price * current.quantity,
            0
        );
        const totalOrderItemOptionsPrice = orderItemOptions.reduce(
            (prev, current) => prev + current.price,
            0
        );
        const order: Partial<Order> = {
            user,
            restaurant,
            total_order_items_price:
                totalOrderItemsprice + totalOrderItemOptionsPrice,
            total_order_price:
                restaurant.delivery_fee +
                restaurant.tax_price +
                totalOrderItemsprice +
                totalOrderItemOptionsPrice,
            is_paid: false,
            payment_method: createOrderDto.payment_method,
            tax_price: restaurant.tax_price,
            delivery_price: restaurant.delivery_fee,
        };

        const savedorder = await this.ordersService.create(order);
        orderItems.forEach((obj) => Object.assign(obj, { order: savedorder }));
        const savedOrderItems = await this.orderItemsService.createMany(
            orderItems
        );

        const orderItemOptionsToBeSaved: Partial<OrderItemOption>[] = [];
        for (let orderItem of savedOrderItems) {
            const index = orderItemOptions.findIndex(
                (elem) => elem.menu_item.id === orderItem.menu_item.id
            );
            if (index >= 0) {
                const { menu_item, ...rest } = orderItemOptions[index];
                orderItemOptionsToBeSaved.push({
                    ...rest,
                    order_item: orderItem,
                });
            }
        }

        const savedOrderItemOptions =
            await this.orderItemOptionsService.createMany(
                orderItemOptionsToBeSaved
            );
        for (let orderItem of savedOrderItems) {
            const index = savedOrderItemOptions.findIndex(
                (elem) => elem.order_item.id === orderItem.id
            );
            if (index >= 0) {
                if (orderItem.order_item_options) {
                    orderItem.order_item_options.push(
                        savedOrderItemOptions[index]
                    );
                } else {
                    orderItem.order_item_options = [
                        savedOrderItemOptions[index],
                    ];
                }
            }
        }

        Object.assign(savedorder, { order_items: savedOrderItems });
        return savedorder;
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @ApiParam({ type: "string", name: "restaurantId" })
    @Get("/restaurants/:restaurantId")
    @VerifyRestaurantManager()
    findAll(@Param("restaurantId") id: string) {
        return this.ordersService.findAll(id);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @ApiParam({ type: "string", name: "restaurantId" })
    @ApiParam({ type: "string", name: "orderId" })
    @Get("/:orderId/restaurants/:restaurantId")
    @VerifyRestaurantManager()
    findOne(
        @Param("orderId") orderId: string,
        @Param("restaurantId") restaurantId: string
    ) {
        return this.ordersService.findOne(restaurantId, orderId);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @ApiParam({ type: "string", name: "restaurantId" })
    @ApiParam({ type: "string", name: "orderId" })
    @Patch("/:orderId/restaurants/:restaurantId")
    @VerifyRestaurantManager()
    update(
        @Param("restaurantId") restaurantId: string,
        @Param("orderId") orderId: string,
        @Body() updateOrderDto: UpdateOrderDto
    ) {
        return this.ordersService.update(restaurantId, orderId, updateOrderDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/my")
    findMyOrders(@CurrentUser() user: User, @Query("status") status: string) {
        return this.ordersService.findAllUserOrders(user.id, status);
    }
}
