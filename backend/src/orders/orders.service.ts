import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { isEnum } from "class-validator";
import { Repository } from "typeorm";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order, OrderStatus } from "./entities/order.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order) private readonly repository: Repository<Order>
    ) {}
    create(order: Partial<Order>) {
        const created = this.repository.create(order);
        return this.repository.save(created);
    }

    findAll(restaurantId: string) {
        return this.repository.find({
            where: {
                restaurant: {
                    id: restaurantId,
                },
            },

            relations: {
                restaurant: true,
                user: true,
                order_items: true,
            },
        });
    }

    findAllUserOrders(userId: string, status: string) {
        if (status && isEnum(status, OrderStatus)) {
            return this.repository.find({
                where: {
                    user: {
                        id: userId,
                    },
                    status: status as OrderStatus,
                },
                relations: {
                    restaurant: true,
                    user: true,
                    order_items: true,
                },
            });
        }
        return this.repository.find({
            where: {
                user: {
                    id: userId,
                },
            },

            relations: {
                restaurant: true,
                user: true,
                order_items: true,
            },
        });
    }
    findOne(restaurantId: string, orderId: string) {
        return this.repository.findOne({
            where: {
                restaurant: {
                    id: restaurantId,
                },
                id: orderId,
            },

            relations: {
                restaurant: true,
                user: true,
                order_items: true,
            },
        });
    }

    async update(
        restaurantId: string,
        orderId: string,
        updateOrderDto: UpdateOrderDto
    ) {
        const order = await this.findOne(restaurantId, orderId);
        Object.assign(order, { ...updateOrderDto });
        return this.repository.save(order);
    }
}
