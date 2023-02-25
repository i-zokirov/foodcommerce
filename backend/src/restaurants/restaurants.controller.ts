import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
    UseGuards,
    UnauthorizedException,
} from "@nestjs/common";
import { ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { RestaurantsService } from "./restaurants.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";
import { CreateOpeningHoursDto } from "./dto/create-opening-hours.dto";
import { OpeningHours } from "./entities/opening_hours.entity";
import { OpeningHoursService } from "./opening-hours.service";
import Serialize from "../interceptors/serialize.interceptor";
import { OpeningHoursDto } from "./dto/opening-hours.dto";
import MerchantGuard from "../guards/merchant.guard";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { Restaurant } from "./entities/restaurant.entity";
import CurrentUser from "../decorators/current-user.decorator";
import { User } from "../users/entities/user.entity";
import { RestaurantDto } from "./dto/restaurant.dto";

@Controller("restaurants")
export class RestaurantsController {
    constructor(
        private readonly restaurantsService: RestaurantsService,
        private readonly openingHoursService: OpeningHoursService
    ) {}

    // Create restaurant
    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Post()
    @ApiBearerAuth("JWT")
    @Serialize(RestaurantDto)
    create(
        @CurrentUser() user: User,
        @Body() createRestaurantDto: CreateRestaurantDto
    ) {
        const restaurantDto: Partial<Restaurant> = {
            ...createRestaurantDto,
            managers: [user],
        };
        return this.restaurantsService.create(restaurantDto);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Patch(":restaurantId")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @Serialize(RestaurantDto)
    update(
        @CurrentUser() user: User,
        @Param("restaurantId") restaurantId: string,
        @Body() updateRestaurantDto: UpdateRestaurantDto
    ) {
        return this.restaurantsService.update(
            restaurantId,
            user.id,
            updateRestaurantDto
        );
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Post("/:restaurantId/opening_hours")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @Serialize(OpeningHoursDto)
    async createOpeningHour(
        @Param("restaurantId") restaurantId: string,
        @Body() createOpeningHoursDto: CreateOpeningHoursDto
    ) {
        const restaurant = await this.restaurantsService.findOne(restaurantId);
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found");
        }
        const { opening_time, closing_time, ...rest } = createOpeningHoursDto;
        const openinghour: Partial<OpeningHours> = {
            restaurant,
            restaurant_id: restaurant.id,
            opening_time: new Date(opening_time),
            closing_time: new Date(closing_time),
            ...rest,
        };
        return this.openingHoursService.create(restaurant.id, openinghour);
    }

    @Get("/:restaurantId/opening_hours")
    @ApiParam({ name: "restaurantId", type: "string" })
    @Serialize(OpeningHoursDto)
    async getAllOpeningHours(@Param("restaurantId") restaurantId: string) {
        const restaurant = await this.restaurantsService.findOne(restaurantId);
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found");
        }
        return this.openingHoursService.findAll(restaurant.id);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Delete("/:restaurantId/opening_hours/:opening_hoursId")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "opening_hoursId", type: "string" })
    @Serialize(OpeningHoursDto)
    async deleteOpeningHours(
        @CurrentUser() user: User,
        @Param("restaurantId") restaurantId: string,
        @Param("opening_hoursId") opening_hoursId: string
    ) {
        const restaurant = await this.restaurantsService.findOne(restaurantId);
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found!");
        }
        if (
            restaurant.managers &&
            restaurant.managers.length &&
            !restaurant.managers.some((manager) => manager.id === user.id)
        ) {
            throw new UnauthorizedException("Not authorized!");
        }
        return this.openingHoursService.remove(opening_hoursId);
    }

    @Get()
    @Serialize(RestaurantDto)
    findAll() {
        return this.restaurantsService.findAll();
    }

    @Get("/open")
    @Serialize(RestaurantDto)
    findOpenRestaurants() {
        return this.restaurantsService.findOpenRestaurants();
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Get("/my")
    @ApiBearerAuth("JWT")
    @Serialize(RestaurantDto)
    findMyRestaurants(@CurrentUser() user: User) {
        return this.restaurantsService.findUserRestaurants(user.id);
    }

    @Get(":restaurantId")
    @ApiParam({ name: "restaurantId", type: "string" })
    @Serialize(RestaurantDto)
    findOne(@Param("restaurantId") restaurantId: string) {
        return this.restaurantsService.findOne(restaurantId);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Delete(":restaurantId")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @Serialize(RestaurantDto)
    remove(
        @CurrentUser() user: User,
        @Param("restaurantId") restaurantId: string
    ) {
        return this.restaurantsService.remove(restaurantId, user.id);
    }
}
