import { MenuItem } from "src/menu_items/entities/menu_item.entity";
import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";

@Entity()
export class MenuCategory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.menu_categories, {
        onDelete: "CASCADE",
    })
    restaurant: Restaurant;
    @OneToMany(() => MenuItem, (item) => item.category)
    items: MenuItem[];
}
