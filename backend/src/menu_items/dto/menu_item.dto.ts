import { Expose, Transform } from "class-transformer";

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
}
