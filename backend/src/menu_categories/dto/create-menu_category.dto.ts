import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenuCategoryDto {
    @ApiProperty({
        type: String,
        example: "Turkish meals",
        description: "Name for the new category",
    })
    @IsNotEmpty()
    @IsString()
    name: string;
}
