import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
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
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.managers, {
        onDelete: "SET NULL",
    })
    restaurant: Restaurant;
}
