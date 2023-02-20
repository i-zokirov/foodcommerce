import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Restaurant } from "./restaurant.entity";

@Entity()
export class OpeningHours {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    restaurant_id: string;
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.opening_hours, {
        onDelete: "CASCADE",
    })
    @Column()
    weekday: number;

    @Column({ type: "time" })
    opening_time: Date;

    @Column({ type: "time" })
    closing_time: Date;
}
