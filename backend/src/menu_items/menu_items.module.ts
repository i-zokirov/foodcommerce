import { Module } from '@nestjs/common';
import { MenuItemsService } from './menu_items.service';
import { MenuItemsController } from './menu_items.controller';

@Module({
  controllers: [MenuItemsController],
  providers: [MenuItemsService]
})
export class MenuItemsModule {}
