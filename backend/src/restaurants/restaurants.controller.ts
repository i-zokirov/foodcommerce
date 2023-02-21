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
} from "@nestjs/common";
import { ApiOperation, ApiParam } from "@nestjs/swagger";
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
@Serialize(RestaurantDto)
export class RestaurantsController {
    constructor(
        private readonly restaurantsService: RestaurantsService,
        private readonly openingHoursService: OpeningHoursService
    ) {}

    // Create restaurant
    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Post()
    @ApiOperation({
        summary: "Route for creating a restaurant.",
    })
    create(
        @CurrentUser() user: User,
        @Body() createRestaurantDto: CreateRestaurantDto
    ) {
        const restaurantDto: Partial<Restaurant> = {
            ...createRestaurantDto,
            owner: user,
            managers: [user],
        };
        return this.restaurantsService.create(restaurantDto);
    }

    @UseGuards(JwtAuthGuard)
    @UseGuards(MerchantGuard)
    @Patch(":restaurantId")
    @ApiOperation({
        summary: "Route for updating a restaurant.",
    })
    @ApiParam({ name: "restaurantId", type: "string" })
    update(
        @Param("restaurantId") restaurantId: string,
        @Body() updateRestaurantDto: UpdateRestaurantDto
    ) {
        return this.restaurantsService.update(
            restaurantId,
            updateRestaurantDto
        );
    }

    @Post("/:restaurantId/opening_hours")
    @ApiOperation({
        summary: "Route for creating an opening hour of a restaurant.",
    })
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
    @ApiOperation({
        summary: "Route for getting opening hours for a restaurant.",
    })
    @ApiParam({ name: "restaurantId", type: "string" })
    async getAllOpeningHours(@Param("restaurantId") restaurantId: string) {
        const restaurant = await this.restaurantsService.findOne(restaurantId);
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found");
        }
        return this.openingHoursService.findAll(restaurant.id);
    }

    @Get()
    findAll() {
        return this.restaurantsService.findAll();
    }

    @Get("/open")
    @ApiOperation({
        summary: "Route for getting all open restaurants.",
    })
    findOpenRestaurants() {
        return this.restaurantsService.findOpenRestaurants();
    }

    @Get(":restaurantId")
    @ApiOperation({
        summary: "Route for getting a restaurant.",
    })
    @ApiParam({ name: "restaurantId", type: "string" })
    findOne(@Param("restaurantId") restaurantId: string) {
        return this.restaurantsService.findOne(restaurantId);
    }

    @Delete(":restaurantId")
    @ApiOperation({
        summary: "Route for deleting a restaurant.",
    })
    @ApiParam({ name: "restaurantId", type: "string" })
    remove(@Param("restaurantId") restaurantId: string) {
        return this.restaurantsService.remove(restaurantId);
    }
}
