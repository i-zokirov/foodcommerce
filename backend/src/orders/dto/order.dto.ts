import { Expose, Transform, Type } from "class-transformer";
import { RestaurantDto } from "../../restaurants/dto/restaurant.dto";
import { OrderItemDto } from "./order_item.dto";

export class OrderDto {
    @Expose()
    id: string;
    @Expose()
    @Transform(({ obj }) => obj.user.id)
    user_id: string;
    @Expose()
    @Type(() => RestaurantDto)
    restaurant: RestaurantDto;
    @Expose()
    @Type(() => OrderItemDto)
    order_items: OrderItemDto[];
    @Expose()
    total_order_items_price: number;
    @Expose()
    total_order_price: number;
    @Expose()
    is_paid: boolean;
    @Expose()
    payment_method: string;
    @Expose()
    tax_price: number;
    @Expose()
    delivery_price: number;
    @Expose()
    @Transform(({ obj }) => new Date(obj.createdAt))
    createdAt: Date;
    @Expose()
    @Transform(({ obj }) => new Date(obj.updatedAt))
    updatedAt: Date;
}
