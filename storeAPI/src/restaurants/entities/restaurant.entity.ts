import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
} from "typeorm";
import { OpeningHours } from "./opening_hours.entity";
import { User } from "../../users/entities/user.entity";
import { MenuCategory } from "../../menu_categories/entities/menu_category.entity";
import { MenuItem } from "../../menu_items/entities/menu_item.entity";
import { Order } from "../../orders/entities/order.entity";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column({ nullable: true })
    email: string;
    @Column()
    phone: string;
    @Column({ nullable: true })
    website: string;
    @Column()
    city: string;
    @Column()
    street: string;
    @Column()
    zipcode: string;
    @Column()
    lng: number;
    @Column()
    lat: number;
    @Column()
    logo: string;
    @Column()
    banner: string;
    @Column({ default: 0 })
    min_order_value: number;
    @Column({ default: true })
    delivery_supported: boolean;
    @Column({ default: 0 })
    delivery_fee: number;
    @Column({ default: 0 })
    tax_price: number;
    @Column({ default: true })
    in_store_pickup: boolean;
    @OneToMany(() => OpeningHours, (openinghours) => openinghours.restaurant, {
        onDelete: "CASCADE",
    })
    opening_hours: OpeningHours[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToMany(() => User, (user) => user.restaurants)
    @JoinTable()
    managers: User[];
    @OneToMany(() => MenuCategory, (category) => category.restaurant)
    menu_categories: MenuCategory[];
    @OneToMany(() => MenuItem, (item) => item.restaurant)
    menu_items: MenuItem[];
    @OneToMany(() => Order, (order) => order.restaurant)
    orders: Order[];
}
