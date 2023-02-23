import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateMenuItemOptionDto {
    @ApiProperty({
        type: String,
        description: "Name of the menu item option",
        example: "Extra Cheese",
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: Number,
        description: "Price of the menu item option",
        example: 2.5,
    })
    @IsNotEmpty()
    @IsNumber()
    price: number;
}
