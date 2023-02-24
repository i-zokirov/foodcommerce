import { Order } from "src/orders/entities/order.entity";
import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    OneToMany,
} from "typeorm";

export enum UserRole {
    Customer = "Customer",
    Merchant = "Merchant",
    Admin = "Admin",
}
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column({ default: UserRole.Customer })
    role: string;
    @OneToMany(() => Order, (order) => order.user)
    orders: [];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToMany(() => Restaurant, (restaurant) => restaurant.managers, {
        onDelete: "SET NULL",
    })
    restaurants: Restaurant[];
}
