import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderItemOption } from "./entities/order_item_option.entity";

@Injectable()
export class OrderItemOptionsService {
    constructor(
        @InjectRepository(OrderItemOption)
        private readonly repository: Repository<OrderItemOption>
    ) {}
    create(orderItemOptionAttr: Partial<OrderItemOption>) {
        return "This action adds a new order";
    }

    createMany(orderItemOptions: Partial<OrderItemOption>[]) {
        const options = this.repository.create(orderItemOptions);
        return this.repository.save(options);
    }

    findAll() {
        return `This action returns all orders`;
    }

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, orderItemOptionAttr: Partial<OrderItemOption>) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
