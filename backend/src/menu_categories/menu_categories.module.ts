import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuCategoriesService } from "./menu_categories.service";
import { MenuCategoriesController } from "./menu_categories.controller";
import { MenuCategory } from "./entities/menu_category.entity";
import { RestaurantMiddleware } from "../middleware/restaurant.middleware";
import { RestaurantsModule } from "../restaurants/restaurants.module";

@Module({
    imports: [TypeOrmModule.forFeature([MenuCategory]), RestaurantsModule],
    controllers: [MenuCategoriesController],
    providers: [MenuCategoriesService],
    exports: [MenuCategoriesService],
})
export class MenuCategoriesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RestaurantMiddleware)
            .forRoutes(
                "/restaurants/:restaurantId/menu_categories",
                "/restaurants/:restaurantId/menu_categories/:categoryId"
            );
    }
}
