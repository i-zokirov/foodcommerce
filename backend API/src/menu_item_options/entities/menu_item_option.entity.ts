import { MenuItem } from "src/menu_items/entities/menu_item.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class MenuItemOption {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ default: 0 })
    price: number;

    @ManyToOne(() => MenuItem, (menuitem) => menuitem.menu_item_options, {
        onDelete: "CASCADE",
    })
    menu_item: MenuItem;
}
