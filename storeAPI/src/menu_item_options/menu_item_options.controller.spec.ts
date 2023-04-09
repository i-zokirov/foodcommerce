import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemOptionsController } from './menu_item_options.controller';
import { MenuItemOptionsService } from './menu_item_options.service';

describe('MenuItemOptionsController', () => {
  let controller: MenuItemOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuItemOptionsController],
      providers: [MenuItemOptionsService],
    }).compile();

    controller = module.get<MenuItemOptionsController>(MenuItemOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
