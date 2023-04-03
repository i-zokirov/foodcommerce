import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { OrderStatus } from "../entities/order.entity";

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsEnum(OrderStatus)
    @ApiProperty({
        enum: OrderStatus,
        description: "Order status value.",
        example: OrderStatus.Dispatched,
    })
    status: OrderStatus;
}
