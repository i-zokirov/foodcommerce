import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateMenuItemOptionDto } from "./dto/update-menu_item_option.dto";
import { MenuItemOption } from "./entities/menu_item_option.entity";

@Injectable()
export class MenuItemOptionsService {
    constructor(
        @InjectRepository(MenuItemOption)
        private readonly repository: Repository<MenuItemOption>
    ) {}
    create(menuItemAttr: Partial<MenuItemOption>) {
        const menuitem = this.repository.create(menuItemAttr);
        return this.repository.save(menuitem);
    }

    findByMenuItem(menuItemId: string) {
        return this.repository.find({
            where: { menu_item: { id: menuItemId } },
            relations: { menu_item: true },
        });
    }

    findOne(optionId: string) {
        return this.repository.findOne({
            where: { id: optionId },
            relations: { menu_item: true },
        });
    }

    async update(id: string, updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
        const option = await this.findOne(id);
        if (!option) {
            throw new NotFoundException();
        }
        Object.assign(option, { ...updateMenuItemOptionDto });
        return this.repository.save(option);
    }

    async remove(optionId: string) {
        const option = await this.findOne(optionId);
        if (!option) {
            throw new NotFoundException();
        }
        return this.repository.remove(option);
    }
}
