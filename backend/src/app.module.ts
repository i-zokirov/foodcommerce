import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { OrdersModule } from "./orders/orders.module";
import { MenuItemsModule } from "./menu_items/menu_items.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { MenuCategoriesModule } from "./menu_categories/menu_categories.module";

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
