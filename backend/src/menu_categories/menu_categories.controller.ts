import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { MenuCategoriesService } from "./menu_categories.service";
import { CreateMenuCategoryDto } from "./dto/create-menu_category.dto";
import { UpdateMenuCategoryDto } from "./dto/update-menu_category.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import MerchantGuard from "../guards/merchant.guard";
import { VerifyRestaurantManager } from "../interceptors/verify-restaurant-manager.interceptor";
import { MenuCategory } from "./entities/menu_category.entity";
import CurrentRestaurant from "../decorators/current-restaurant.decorator";
import { Restaurant } from "../restaurants/entities/restaurant.entity";
import Serialize from "../interceptors/serialize.interceptor";
import { MenuCategoryDto } from "./dto/menu_category.dto";

@Controller("/restaurants/:restaurantId/menu_categories")
@VerifyRestaurantManager()
@Serialize(MenuCategoryDto)
export class MenuCategoriesController {
    constructor(
        private readonly menuCategoriesService: MenuCategoriesService
    ) {}

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Post()
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    create(
        @CurrentRestaurant() restaurant: Restaurant,
        @Body() createMenuCategoryDto: CreateMenuCategoryDto
    ) {
        const categoryAttr: Partial<MenuCategory> = {
            ...createMenuCategoryDto,
            restaurant,
        };
        return this.menuCategoriesService.create(categoryAttr);
    }

    @Get()
    @ApiParam({ name: "restaurantId", type: "string" })
    findAll(@CurrentRestaurant() restaurant: Restaurant) {
        return this.menuCategoriesService.findAll(restaurant.id);
    }

    @Get(":categoryId")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "categoryId", type: "string" })
    findOne(
        @Param("restaurantId") restaurantId: string,
        @Param("categoryId") categoryId: string
    ) {
        return this.menuCategoriesService.findOne(categoryId, restaurantId);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Patch(":categoryId")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "categoryId", type: "string" })
    async update(
        @CurrentRestaurant() restaurant: Restaurant,
        @Param("categoryId") categoryId: string,
        @Body() updateMenuCategoryDto: UpdateMenuCategoryDto
    ) {
        const updatedCategory = await this.menuCategoriesService.update(
            categoryId,
            updateMenuCategoryDto
        );
        return Object.assign(updatedCategory, { restaurant });
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "categoryId", type: "string" })
    @Delete(":categoryId")
    async remove(
        @CurrentRestaurant() restaurant: Restaurant,
        @Param("categoryId") categoryId: string
    ) {
        const deletedCategory = await this.menuCategoriesService.remove(
            categoryId
        );
        return Object.assign(deletedCategory, { restaurant });
    }
}
