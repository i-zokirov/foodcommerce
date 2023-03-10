import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { Restaurant } from "../restaurants/entities/restaurant.entity";
import { MenuCategory } from "../menu_categories/entities/menu_category.entity";
import { MenuItem } from "../menu_items/entities/menu_item.entity";

declare global {
    namespace Express {
        interface Request {
            restaurant?: Restaurant;
            user?: User;
            menu_category?: MenuCategory;
            menu_item?: MenuItem;
        }
    }
}

@Injectable()
export class RestaurantMiddleware implements NestMiddleware {
    constructor(private readonly restaurantsService: RestaurantsService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const restaurantId = req.params.restaurantId;
        const restaurant = await this.restaurantsService.findOne(restaurantId);
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found!");
        }
        req.restaurant = restaurant;
        next();
    }
}
