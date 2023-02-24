import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";

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

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
