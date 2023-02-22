import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { OpeningHours } from "./opening_hours.entity";
import { User } from "../../users/entities/user.entity";

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
    @Column({ default: true })
    in_store_pickup: boolean;
    @OneToMany(
        () => OpeningHours,
        (openinghours) => openinghours.restaurant_id,
        { onDelete: "CASCADE" }
    )
    opening_hours: OpeningHours[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @OneToMany(() => User, (user) => user.restaurant)
    managers: User[];
}
