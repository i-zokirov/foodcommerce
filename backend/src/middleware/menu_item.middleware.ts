import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { MenuItemsService } from "../menu_items/menu_items.service";

@Injectable()
export class MenuItemMiddleware implements NestMiddleware {
    constructor(private readonly menuItemService: MenuItemsService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const { restaurantId, menu_item_id } = req.params;

        const menuItem = await this.menuItemService.findOne(
            restaurantId,
            menu_item_id
        );
        if (!menuItem) {
            throw new NotFoundException("MenuItem not found!");
        }

        req.menu_item = menuItem;
        next();
    }
}
