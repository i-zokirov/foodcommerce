import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { ApiOperation, ApiParam } from "@nestjs/swagger";
import { RestaurantsService } from "./restaurants.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";

@Controller("restaurants")
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Post()
    @ApiOperation({
        summary: "Route for creating a restaurant.",
    })
    create(@Body() createRestaurantDto: CreateRestaurantDto) {
        return this.restaurantsService.create(createRestaurantDto);
    }

    @Get()
    findAll() {
        return this.restaurantsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.restaurantsService.findOne(id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateRestaurantDto: UpdateRestaurantDto
    ) {
        return this.restaurantsService.update(+id, updateRestaurantDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.restaurantsService.remove(+id);
    }
}
