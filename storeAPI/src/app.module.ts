import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { OrdersModule } from "./orders/orders.module";
import { MenuItemsModule } from "./menu_items/menu_items.module";
import { TypeOrmConfigService } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { MenuCategoriesModule } from "./menu_categories/menu_categories.module";
import { MenuItemOptionsModule } from "./menu_item_options/menu_item_options.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        UsersModule,
        RestaurantsModule,
        OrdersModule,
        MenuItemsModule,
        AuthModule,
        MenuCategoriesModule,
        MenuItemOptionsModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        AppService,
        {
            provide: APP_PIPE,
            useValue: new ValidationPipe({
                whitelist: true,
            }),
        },
    ],
})
export class AppModule {}
