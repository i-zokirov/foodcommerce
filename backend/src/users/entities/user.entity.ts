import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    OneToMany,
} from "typeorm";
import { Order } from "../../orders/entities/order.entity";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";
import { UserAddress } from "./user.address.entity";
export enum UserRole {
    Customer = "Customer",
    Merchant = "Merchant",
    Admin = "Admin",
}
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ unique: true })
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

    @OneToMany(() => UserAddress, (address) => address.user)
    registered_addresses: UserAddress[];
}
