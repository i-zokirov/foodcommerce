import { Module } from '@nestjs/common';
import { MenuItemOptionsService } from './menu_item_options.service';
import { MenuItemOptionsController } from './menu_item_options.controller';

@Module({
  controllers: [MenuItemOptionsController],
  providers: [MenuItemOptionsService]
})
export class MenuItemOptionsModule {}
