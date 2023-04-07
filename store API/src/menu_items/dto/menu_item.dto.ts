import { Expose, Transform } from "class-transformer";
import { MenuItemOption } from "../../menu_item_options/entities/menu_item_option.entity";

export class MenuItemDto {
    @Expose()
    id: string;
    @Expose()
    name: string;
    @Expose()
    description: string;
    @Expose()
    image: string;
    @Expose()
    price: number;
    @Expose()
    @Transform(({ obj }) => (obj.restaurant ? obj.restaurant.id : null))
    restaurant_id: string;
    @Expose()
    @Transform(({ obj }) => (obj.category ? obj.category.id : null))
    category_id: string;
    @Expose()
    @Transform(({ obj }) =>
        obj.menu_item_options && obj.menu_item_options.length
            ? obj.menu_item_options
            : []
    )
    menu_item_options: MenuItemOption[];
}
