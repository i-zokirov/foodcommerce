import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { MenuCategoriesService } from "../menu_categories/menu_categories.service";

@Injectable()
export class CategoryMiddleware implements NestMiddleware {
    constructor(private readonly categoryService: MenuCategoriesService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const { restaurantId, categoryId } = req.params;

        const category = await this.categoryService.findOne(
            categoryId,
            restaurantId
        );
        if (!category) {
            throw new NotFoundException("Category not found!");
        }

        req.menu_category = category;
        next();
    }
}
