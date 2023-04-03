import { IsString, IsNotEmpty, IsNumber, Min, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateMenuItemDto {
    @ApiProperty({
        type: String,
        description: "Name of the menu item",
        example: "Spaghetti Bolognese",
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: "Description of the menu item",
        example:
            "Classic Italian pasta dish with rich tomato sauce and ground beef",
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        type: String,
        description: "Image of the menu item",
        example: "https://example.com/images/pizza.jpg",
    })
    @IsUrl()
    @IsNotEmpty()
    image: string;

    @ApiProperty({
        type: Number,
        description: "Price of the menu item",
        example: 12.99,
    })
    @IsNumber()
    @Min(0)
    price: number;
}
