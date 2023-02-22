import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { MenuItemsService } from "./menu_items.service";
import { CreateMenuItemDto } from "./dto/create-menu_item.dto";
import { UpdateMenuItemDto } from "./dto/update-menu_item.dto";

@Controller("/restaurants/:restaurantId/menu_categories/:categoryId/menu_items")
export class MenuItemsController {
    constructor(private readonly menuItemsService: MenuItemsService) {}

    @Post()
    create(@Body() createMenuItemDto: CreateMenuItemDto) {
        return this.menuItemsService.create(createMenuItemDto);
    }

    @Get()
    findAll() {
        return this.menuItemsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.menuItemsService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateMenuItemDto: UpdateMenuItemDto
    ) {
        return this.menuItemsService.update(+id, updateMenuItemDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.menuItemsService.remove(+id);
    }
}
