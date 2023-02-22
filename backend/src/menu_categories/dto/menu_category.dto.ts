import { Expose, Transform } from "class-transformer";

export class MenuCategoryDto {
    @Expose()
    id: string;
    @Expose()
    name: string;
    @Expose()
    @Transform(({ obj }) => (obj.restaurant ? obj.restaurant.id : null))
    restaurant_id: string;
}
