import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { OrderItem } from "./order_item.entity";
import { MenuItemOption } from "../../menu_item_options/entities/menu_item_option.entity";
@Entity()
export class OrderItemOption {
    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @ManyToOne(() => OrderItem, (order) => order.order_item_options)
    order_item: OrderItem;
    @ManyToOne(() => MenuItemOption, { onDelete: "SET NULL" })
    menu_item_option: MenuItemOption;
}
