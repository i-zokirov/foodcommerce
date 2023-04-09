import { IsNotEmpty, IsDateString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOpeningBeforeClosing } from "../../validators/openingbeforeclosing.validation";

export class CreateOpeningHoursDto {
    @ApiPropertyOptional({
        type: Date,
        example: "2023-02-20T08:30:00.000Z",
        description: "Opening hour.",
    })
    @IsNotEmpty()
    @IsDateString()
    @IsOpeningBeforeClosing()
    opening_time: string;

    @ApiPropertyOptional({
        type: Date,
        example: "2023-02-20T17:30:00.000Z",
        description: "Closing hour.",
    })
    @IsNotEmpty()
    @IsDateString()
    closing_time: string;
}
