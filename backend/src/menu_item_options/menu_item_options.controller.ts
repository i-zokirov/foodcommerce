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
import { ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { MenuItemOptionsService } from "./menu_item_options.service";
import { CreateMenuItemOptionDto } from "./dto/create-menu_item_option.dto";
import { UpdateMenuItemOptionDto } from "./dto/update-menu_item_option.dto";
import Serialize from "../interceptors/serialize.interceptor";
import { MenuItemOptionDto } from "./dto/menu_item_option.dto";
import { VerifyRestaurantManager } from "../interceptors/verify-restaurant-manager.interceptor";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import MerchantGuard from "../guards/merchant.guard";
import CurrentMenuItem from "../decorators/menu_item.decorator";
import { MenuItem } from "../menu_items/entities/menu_item.entity";
import { MenuItemOption } from "./entities/menu_item_option.entity";

@Controller()
@VerifyRestaurantManager()
@Serialize(MenuItemOptionDto)
export class MenuItemOptionsController {
    constructor(
        private readonly menuItemOptionsService: MenuItemOptionsService
    ) {}

    @Get("/menu_item_options/:option_id")
    async findOne(@Param("option_id") option_id: string) {
        const option = await this.menuItemOptionsService.findOne(option_id);
        if (!option) {
            throw new NotFoundException("Option not found!");
        }
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @ApiBearerAuth()
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "menu_item_id", type: "string" })
    @Post(
        "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options"
    )
    create(
        @CurrentMenuItem() menuItem: MenuItem,
        @Body() createMenuItemOptionDto: CreateMenuItemOptionDto
    ) {
        const menuItemOption: Partial<MenuItemOption> = {
            ...createMenuItemOptionDto,
            menu_item: menuItem,
        };
        return this.menuItemOptionsService.create(menuItemOption);
    }

    @Get(
        "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options"
    )
    findAll(@CurrentMenuItem() menuItem: MenuItem) {
        return this.menuItemOptionsService.findByMenuItem(menuItem.id);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Patch(
        "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options/:option_id"
    )
    @ApiBearerAuth()
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "menu_item_id", type: "string" })
    @ApiParam({ name: "option_id", type: "string" })
    update(
        @Param("option_id") id: string,
        @Body() updateMenuItemOptionDto: UpdateMenuItemOptionDto
    ) {
        return this.menuItemOptionsService.update(id, updateMenuItemOptionDto);
    }

    @UseGuards(JwtAuthGuard, MerchantGuard)
    @Delete(
        "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options/:option_id"
    )
    @ApiBearerAuth()
    @ApiParam({ name: "restaurantId", type: "string" })
    @ApiParam({ name: "menu_item_id", type: "string" })
    @ApiParam({ name: "option_id", type: "string" })
    remove(@Param("option_id") id: string) {
        return this.menuItemOptionsService.remove(id);
    }
}
