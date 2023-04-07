import {
    IsString,
    IsInt,
    IsNotEmpty,
    Min,
    Max,
    IsDateString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsOpeningBeforeClosing } from "src/validators/openingbeforeclosing.validation";

export class CreateOpeningHoursDto {
    @ApiProperty({
        type: String,
        example: "e80a7ed9-bb55-4ebc-afd8-5ea62cbab3b2",
        description: "The ID of the restaurant",
    })
    @IsNotEmpty()
    @IsString()
    restaurant_id: string;

    @ApiProperty({
        type: Number,
        example: "1",
        description: "0 to 6 integer indicating day of the week",
    })
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(6)
    weekday: number;

    @ApiProperty({
        type: Date,
        example: "2023-02-20T08:30:00.000Z",
        description: "Opening hour.",
    })
    @IsNotEmpty()
    @IsDateString()
    @IsOpeningBeforeClosing()
    opening_time: string;

    @ApiProperty({
        type: Date,
        example: "2023-02-20T17:30:00.000Z",
        description: "Closing hour.",
    })
    @IsNotEmpty()
    @IsDateString()
    closing_time: string;
}
