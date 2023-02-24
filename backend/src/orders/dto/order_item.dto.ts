import { Expose, Transform, Type } from "class-transformer";
import { MenuItemDto } from "../../menu_items/dto/menu_item.dto";
import { OrderItemOptionDto } from "./order_item_option.dto";

export class OrderItemDto {
    @Expose()
    id: number;
    @Expose()
    name: string;
    @Expose()
    price: number;
    @Expose()
    quantity: number;
    @Expose()
    @Type(() => MenuItemDto)
    @Transform(({ obj }) => {
        const menu_item = obj.menu_item;
        if (obj.menu_item && menu_item.restaurant) {
            delete menu_item.restaurant;
        }
        if (obj.menu_item && menu_item.menu_item_options) {
            delete menu_item.menu_item_options;
        }
        return menu_item;
    })
    menu_item: MenuItemDto;
    @Expose()
    @Type(() => OrderItemOptionDto)
    order_item_options: OrderItemOptionDto[];
}
