import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuItemsService } from "./menu_items.service";
import { MenuItemsController } from "./menu_items.controller";
import { MenuItem } from "./entities/menu_item.entity";
import { RestaurantMiddleware } from "../middleware/restaurant.middleware";
import { RestaurantsModule } from "../restaurants/restaurants.module";
import { MenuCategoriesModule } from "../menu_categories/menu_categories.module";
import { CategoryMiddleware } from "../middleware/category.middleware";

@Module({
    imports: [
        TypeOrmModule.forFeature([MenuItem]),
        RestaurantsModule,
        MenuCategoriesModule,
    ],
    controllers: [MenuItemsController],
    providers: [MenuItemsService],
    exports: [MenuItemsService],
})
export class MenuItemsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RestaurantMiddleware, CategoryMiddleware)
            .forRoutes(
                "/restaurants/:restaurantId/menu_categories/:categoryId/menu_items",
                "/restaurants/:restaurantId/menu_categories/:categoryId/menu_items/:menu_item_id",
                "/restaurants/:restaurantId/menu_items",
                "/restaurants/:restaurantId/menu_items/:menu_item_id"
            );
    }
}
