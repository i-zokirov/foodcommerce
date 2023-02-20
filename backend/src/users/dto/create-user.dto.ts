import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @IsEmail()
    @ApiProperty({
        type: String,
        description: "email address",
        example: `jon.doe${Math.floor(Math.random() * 10000)}@example.com`,
    })
    email: string;
    @IsString()
    @ApiProperty({ type: String, description: "password", example: "123" })
    password: string;
    @IsString()
    @ApiProperty({ type: String, description: "given name", example: "Jon" })
    firstname: string;
    @IsString()
    @ApiProperty({ type: String, description: "family name", example: "Doe" })
    lastname: string;
}
