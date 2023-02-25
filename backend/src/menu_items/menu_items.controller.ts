import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    NotFoundException,
} from "@nestjs/common";
import { ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { MenuItemsService } from "./menu_items.service";
import { CreateMenuItemDto } from "./dto/create-menu_item.dto";
import { UpdateMenuItemDto } from "./dto/update-menu_item.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import MerchantGuard from "../guards/merchant.guard";
import { MenuItem } from "./entities/menu_item.entity";
import { MenuCategory } from "../menu_categories/entities/menu_category.entity";
import CurrentRestaurant from "../decorators/current-restaurant.decorator";
import { Restaurant } from "../restaurants/entities/restaurant.entity";
import { VerifyRestaurantManager } from "../interceptors/verify-restaurant-manager.interceptor";
import Category from "../decorators/category.decorator";
import Serialize from "../interceptors/serialize.interceptor";
import { MenuItemDto } from "./dto/menu_item.dto";

@Controller("/restaurants/:restaurantId")
@VerifyRestaurantManager()
@Serialize(MenuItemDto)
export class MenuItemsController {
    constructor(private readonly menuItemsService: MenuItemsService) {}

    @Get("/menu_items")
    @ApiParam({ name: "restaurantId", type: "string" })
    findAll(@CurrentRestaurant() restaurant: Restaurant) {
        return this.menuItemsService.findAll(restaurant.id);
    }

    @Get("/menu_items/:menu_item_id")
    @ApiParam({ name: "menu_item_id", type: "string" })
    async findOne(
        @CurrentRestaurant() restaurant: Restaurant,
        @Param("menu_item_id") menu_item_id: string
    ) {
        const menuItem = await this.menuItemsService.findOne(
            restaurant.id,
            menu_item_id
        );
        if (!menuItem) {
            throw new NotFoundException("Menu Item not found");
        }
        return menuItem;
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Patch("/menu_items/:menu_item_id")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "menu_item_id", type: "string" })
    update(
        @Param("menu_item_id") menu_item_id: string,
        @Body() updateMenuItemDto: UpdateMenuItemDto
    ) {
        return this.menuItemsService.update(menu_item_id, updateMenuItemDto);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Delete("/menu_items/:menu_item_id")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "menu_item_id", type: "string" })
    remove(@Param("menu_item_id") menu_item_id: string) {
        return this.menuItemsService.remove(menu_item_id);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Post("/menu_categories/:categoryId/menu_items")
    @ApiBearerAuth("JWT")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "categoryId", type: "string" })
    create(
        @CurrentRestaurant() restaurant: Restaurant,
        @Category() category: MenuCategory,
        @Body() createMenuItemDto: CreateMenuItemDto
    ) {
        const menuitem: Partial<MenuItem> = {
            ...createMenuItemDto,
            category,
            restaurant,
        };
        return this.menuItemsService.create(menuitem);
    }

    @Get("/menu_categories/:categoryId/menu_items")
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "categoryId", type: "string" })
    findByCategory(
        @CurrentRestaurant() restaurant: Restaurant,
        @Category() category: MenuCategory
    ) {
        return this.menuItemsService.findByCategory(restaurant.id, category.id);
    }
}
