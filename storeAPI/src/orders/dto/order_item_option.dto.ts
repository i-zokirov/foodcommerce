import { Expose } from "class-transformer";

export class OrderItemOptionDto {
    @Expose()
    id: number;
    @Expose()
    name: string;
    @Expose()
    price: number;
}
