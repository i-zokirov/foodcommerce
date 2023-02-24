import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsArray,
    IsEnum,
    IsNumber,
} from "class-validator";
import { PaymentMethod } from "../entities/order.entity";

class OrderItemOption {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: "Id of the menu item." })
    menu_item_option_id: string;
}

class OrderItem {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: "Id of the menu item." })
    menu_item_id: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ type: Number, description: "Quantity of the item." })
    quantity: number;

    @IsOptional()
    @IsArray()
    @ApiPropertyOptional({
        type: [OrderItemOption],
        description: "Array of menu item options.",
    })
    menu_item_options: OrderItemOption[];
}

export class CreateOrderDto {
    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
        type: [OrderItem],
        description: "Array of order items.",
    })
    order_items: OrderItem[];

    @IsNotEmpty()
    @IsEnum(PaymentMethod)
    @ApiProperty({
        enum: PaymentMethod,
        description: "Payment method.",
        example: PaymentMethod.Online,
    })
    payment_method: PaymentMethod;
}
