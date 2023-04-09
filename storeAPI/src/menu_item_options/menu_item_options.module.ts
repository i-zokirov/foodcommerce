import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuItemOptionsService } from "./menu_item_options.service";
import { MenuItemOptionsController } from "./menu_item_options.controller";
import { MenuItemOption } from "./entities/menu_item_option.entity";
import { RestaurantMiddleware } from "../middleware/restaurant.middleware";
import { MenuItemMiddleware } from "../middleware/menu_item.middleware";
import { RestaurantsModule } from "../restaurants/restaurants.module";
import { MenuItemsModule } from "../menu_items/menu_items.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([MenuItemOption]),
        RestaurantsModule,
        MenuItemsModule,
    ],
    controllers: [MenuItemOptionsController],
    providers: [MenuItemOptionsService],
})
export class MenuItemOptionsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RestaurantMiddleware, MenuItemMiddleware)
            .forRoutes(
                "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options",
                "/restaurants/:restaurantId/menu_items/:menu_item_id/menu_item_options/:option_id"
            );
    }
}
