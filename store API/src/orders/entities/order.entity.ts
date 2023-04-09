import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { OrderItem } from "./order_item.entity";
import { User } from "../../users/entities/user.entity";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";

export enum OrderStatus {
    Placed = "Placed",
    Accepted = "Accepted",
    Dispatched = "Dispatched",
    Cancelled = "Cancelled",
    Delivered = "Delivered",
}

export enum PaymentMethod {
    Online = "Online",
    CashOnDelivery = "CashOnDelivery",
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(() => User, (user) => user.orders, { onDelete: "SET NULL" })
    user: User;
    @OneToMany(() => OrderItem, (item) => item.order)
    order_items: OrderItem[];
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders, {
        onDelete: "SET NULL",
    })
    restaurant: Restaurant;
    @Column({ enum: OrderStatus, default: OrderStatus.Placed })
    status: OrderStatus;
    @Column()
    total_order_items_price: number;
    @Column({ default: 0 })
    total_order_price: number;
    @Column({ default: false })
    is_paid: boolean;
    @Column({ enum: PaymentMethod, default: PaymentMethod.Online })
    payment_method: PaymentMethod;
    @Column({ default: 0 })
    tax_price: number;
    @Column({ default: 0 })
    delivery_price: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}
