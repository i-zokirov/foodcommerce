import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrderItem } from "./entities/order_item.entity";

@Injectable()
export class OrderItemsService {
    constructor(
        @InjectRepository(OrderItem)
        private readonly repository: Repository<OrderItem>
    ) {}
    create(createOrderDto: CreateOrderDto) {
        return "This action adds a new order";
    }

    createMany(orderItems: Partial<OrderItem>[]) {
        const created = this.repository.create(orderItems);
        return this.repository.save(created);
    }

    findAll() {
        return `This action returns all orders`;
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
