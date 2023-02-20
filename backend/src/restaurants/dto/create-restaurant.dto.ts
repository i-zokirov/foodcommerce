import {
    IsString,
    IsUrl,
    IsEmail,
    IsOptional,
    IsNumber,
    IsBoolean,
    IsNotEmpty,
    Validate,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PhoneValidator } from "src/validators/phone.validator";
export class CreateRestaurantDto {
    @ApiProperty({
        type: String,
        example: "Tandoori House",
        description: "The name of the restaurant",
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        example: "info@tandoorihouse.com",
        description: "The email address of the restaurant",
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        example: "+998 71 255 77 77",
        description: "The phone number of the restaurant",
    })
    @IsNotEmpty()
    @IsString()
    @Validate(PhoneValidator)
    phone: string;

    @ApiPropertyOptional({
        type: String,
        example: "www.tandoorihouse.com",
        description: "The website of the restaurant",
    })
    @IsOptional()
    @IsUrl()
    website: string;

    @ApiProperty({
        type: String,
        example: "Tashkent",
        description: "The city where the restaurant is located",
    })
    @IsNotEmpty()
    @IsString()
    city: string;

    @ApiProperty({
        type: String,
        example: "Bukhara Street",
        description: "The street address of the restaurant",
    })
    @IsNotEmpty()
    @IsString()
    street: string;

    @ApiProperty({
        type: String,
        example: "100015",
        description: "The ZIP code of the restaurant",
    })
    @IsNotEmpty()
    @IsString()
    zipcode: string;

    @ApiProperty({
        type: Number,
        example: 69.2888,
        description: "The longitude of the restaurant location",
    })
    @IsNotEmpty()
    @IsNumber()
    lng: number;

    @ApiProperty({
        type: Number,
        example: 41.3139,
        description: "The latitude of the restaurant location",
    })
    @IsNotEmpty()
    @IsNumber()
    lat: number;

    @ApiProperty({
        type: String,
        example: "https://tandoorihouse.com/logo.png",
        description: "The URL of the restaurant logo image",
    })
    @IsNotEmpty()
    @IsUrl()
    logo: string;

    @ApiProperty({
        type: String,
        example: "https://tandoorihouse.com/banner.png",
        description: "The URL of the restaurant banner image",
    })
    @IsNotEmpty()
    @IsUrl()
    banner: string;

    @ApiPropertyOptional({
        type: Number,
        example: 15000,
        description: "The minimum order value required for delivery",
    })
    @IsOptional()
    @IsNumber()
    min_order_value: number;

    @ApiPropertyOptional({
        type: Boolean,
        example: true,
        description:
            "Whether the restaurant supports delivery. Defaults to TRUE",
    })
    @IsOptional()
    @IsBoolean()
    delivery_supported: boolean;

    @ApiPropertyOptional({
        type: Boolean,
        example: true,
        description:
            "Whether the restaurant supports in-store pickup. Defaults to TRUE",
    })
    @IsOptional()
    @IsBoolean()
    in_store_pickup: boolean;
}
