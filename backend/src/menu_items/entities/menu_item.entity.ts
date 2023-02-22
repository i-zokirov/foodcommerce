import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";
import { MenuCategory } from "../../menu_categories/entities/menu_category.entity";

@Entity()
export class MenuItem {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column("float")
    price: number;

    @ManyToOne(() => MenuCategory, (category) => category.items, {
        onDelete: "CASCADE",
    })
    category: MenuCategory;
    @ManyToOne(() => Restaurant, (category) => category.menu_items, {
        onDelete: "CASCADE",
    })
    restaurant: Restaurant;
}
