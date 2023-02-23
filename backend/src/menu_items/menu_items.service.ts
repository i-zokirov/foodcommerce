import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateMenuItemDto } from "./dto/update-menu_item.dto";
import { MenuItem } from "./entities/menu_item.entity";

@Injectable()
export class MenuItemsService {
    constructor(
        @InjectRepository(MenuItem)
        private readonly repository: Repository<MenuItem>
    ) {}
    create(itemAttr: Partial<MenuItem>) {
        const menuitem = this.repository.create(itemAttr);
        return this.repository.save(menuitem);
    }

    findAll(restaurantId: string) {
        return this.repository.find({
            where: {
                restaurant: { id: restaurantId },
            },
            relations: {
                restaurant: true,
                category: true,
            },
        });
    }

    findByCategory(restaurantId: string, categoryId: string) {
        return this.repository.find({
            where: {
                restaurant: { id: restaurantId },
                category: { id: categoryId },
            },
            relations: {
                restaurant: true,
                category: true,
            },
        });
    }

    findOne(restaurantId: string, itemId: string) {
        return this.repository.findOne({
            where: {
                restaurant: { id: restaurantId },
                id: itemId,
            },
            relations: {
                restaurant: true,
                category: true,
            },
        });
    }

    async update(menu_item_id: string, updateMenuItemDto: UpdateMenuItemDto) {
        const menuItem = await this.repository.findOne({
            where: { id: menu_item_id },
        });
        if (!menuItem) {
            throw new NotFoundException("Menu Item not found!");
        }

        Object.assign(menuItem, { ...updateMenuItemDto });

        return this.repository.save(menuItem);
    }

    async remove(menu_item_id: string) {
        const menuItem = await this.repository.findOne({
            where: { id: menu_item_id },
        });
        if (!menuItem) {
            throw new NotFoundException("Menu Item not found!");
        }
        return this.repository.remove(menuItem);
    }
}
