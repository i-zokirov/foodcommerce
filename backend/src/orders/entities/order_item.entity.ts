import { MenuItem } from "src/menu_items/entities/menu_item.entity";
import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Order } from "./order.entity";
import { OrderItemOption } from "./order_item_option.entity";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column({ default: 1 })
    quantity: number;
    @ManyToOne(() => MenuItem, { onDelete: "SET NULL" })
    menu_item: MenuItem;
    @ManyToOne(() => Order, (order) => order.order_items)
    order: Order;
    @OneToMany(() => OrderItemOption, (itemOption) => itemOption.order_item)
    order_item_options: OrderItemOption[];
}
