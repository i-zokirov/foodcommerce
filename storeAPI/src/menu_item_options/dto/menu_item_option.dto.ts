import { Expose, Transform } from "class-transformer";

export class MenuItemOptionDto {
    @Expose()
    id: string;
    @Expose()
    name: string;
    @Expose()
    price: number;
    @Expose()
    @Transform(({ obj }) => (obj.menu_item ? obj.menu_item.id : null))
    menu_item_id: string;
}
