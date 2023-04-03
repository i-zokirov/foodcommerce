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

export class UpdateRestaurantDto {
    @ApiPropertyOptional({
        type: String,
        example: "Tandoori House",
        description: "The name of the restaurant",
    })
    @IsOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional({
        type: String,
        example: "info@tandoorihouse.com",
        description: "The email address of the restaurant",
    })
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiPropertyOptional({
        type: String,
        example: "+998 71 255 77 77",
        description: "The phone number of the restaurant",
    })
    @IsOptional()
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

    @ApiPropertyOptional({
        type: String,
        example: "Tashkent",
        description: "The city where the restaurant is located",
    })
    @IsOptional()
    @IsString()
    city: string;

    @ApiPropertyOptional({
        type: String,
        example: "Bukhara Street",
        description: "The street address of the restaurant",
    })
    @IsOptional()
    @IsString()
    street: string;

    @ApiPropertyOptional({
        type: String,
        example: "100015",
        description: "The ZIP code of the restaurant",
    })
    @IsOptional()
    @IsString()
    zipcode: string;

    @ApiPropertyOptional({
        type: Number,
        example: 69.2888,
        description: "The longitude of the restaurant location",
    })
    @IsOptional()
    @IsNumber()
    lng: number;

    @ApiPropertyOptional({
        type: Number,
        example: 41.3139,
        description: "The latitude of the restaurant location",
    })
    @IsOptional()
    @IsNumber()
    lat: number;

    @ApiPropertyOptional({
        type: String,
        example: "https://tandoorihouse.com/logo.png",
        description: "The URL of the restaurant logo image",
    })
    @IsOptional()
    @IsUrl()
    logo: string;

    @ApiPropertyOptional({
        type: String,
        example: "https://tandoorihouse.com/banner.png",
        description: "The URL of the restaurant banner image",
    })
    @IsOptional()
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
