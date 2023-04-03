import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { Order } from "./entities/order.entity";
import { OrderItem } from "./entities/order_item.entity";
import { OrderItemOption } from "./entities/order_item_option.entity";
import { RestaurantMiddleware } from "../middleware/restaurant.middleware";
import { RestaurantsModule } from "../restaurants/restaurants.module";
import { OrderItemOptionsService } from "./order_item_options.service";
import { MenuItemsModule } from "../menu_items/menu_items.module";
import { OrderItemsService } from "./order_items.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Order, OrderItem, OrderItemOption]),
        RestaurantsModule,
        MenuItemsModule,
    ],
    controllers: [OrdersController],
    providers: [OrdersService, OrderItemsService, OrderItemOptionsService],
})
export class OrdersModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RestaurantMiddleware)
            .forRoutes(
                "/orders/restaurants/:restaurantId",
                "/orders/:orderId/restaurants/:restaurantId"
            );
    }
}
