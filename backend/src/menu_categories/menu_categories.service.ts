import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateMenuCategoryDto } from "./dto/update-menu_category.dto";
import { MenuCategory } from "./entities/menu_category.entity";

@Injectable()
export class MenuCategoriesService {
    constructor(
        @InjectRepository(MenuCategory)
        private readonly categoryRepository: Repository<MenuCategory>
    ) {}
    create(categoryAttr: Partial<MenuCategory>) {
        const category = this.categoryRepository.create(categoryAttr);
        return this.categoryRepository.save(category);
    }

    findAll(restaurantId: string) {
        return this.categoryRepository.find({
            where: { restaurant: { id: restaurantId } },
            relations: { restaurant: true },
        });
    }

    findOne(categoryId: string, restaurantId: string) {
        return this.categoryRepository.findOne({
            where: { id: categoryId, restaurant: { id: restaurantId } },
            relations: { restaurant: true },
        });
    }

    findById(categoryId: string) {
        return this.categoryRepository.findOne({
            where: { id: categoryId },
        });
    }

    async update(
        categoryId: string,
        updateMenuCategoryDto: UpdateMenuCategoryDto
    ) {
        const category = await this.findById(categoryId);
        if (!category) {
            throw new NotFoundException("Category not found!");
        }
        Object.assign(category, updateMenuCategoryDto);

        return this.categoryRepository.save(category, { reload: true });
    }

    async remove(categoryId: string) {
        const category = await this.findById(categoryId);
        if (!category) {
            throw new NotFoundException("Category not found!");
        }
        return this.categoryRepository.remove(category);
    }
}
