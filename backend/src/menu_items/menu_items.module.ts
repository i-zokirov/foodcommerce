import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuItemsService } from "./menu_items.service";
import { MenuItemsController } from "./menu_items.controller";
import { MenuItem } from "./entities/menu_item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MenuItem])],
    controllers: [MenuItemsController],
    providers: [MenuItemsService],
})
export class MenuItemsModule {}
