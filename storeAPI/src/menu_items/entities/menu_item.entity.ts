import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";
import { MenuCategory } from "../../menu_categories/entities/menu_category.entity";
import { MenuItemOption } from "../../menu_item_options/entities/menu_item_option.entity";

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
    @Column({ nullable: true })
    image: string;
    @ManyToOne(() => MenuCategory, (category) => category.items, {
        onDelete: "CASCADE",
    })
    category: MenuCategory;
    @ManyToOne(() => Restaurant, (category) => category.menu_items, {
        onDelete: "CASCADE",
    })
    restaurant: Restaurant;
    @OneToMany(() => MenuItemOption, (option) => option.menu_item, {
        onDelete: "CASCADE",
    })
    menu_item_options: MenuItemOption[];
}
