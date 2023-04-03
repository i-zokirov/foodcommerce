import { Test, TestingModule } from '@nestjs/testing';
import { MenuCategoriesController } from './menu_categories.controller';
import { MenuCategoriesService } from './menu_categories.service';

describe('MenuCategoriesController', () => {
  let controller: MenuCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuCategoriesController],
      providers: [MenuCategoriesService],
    }).compile();

    controller = module.get<MenuCategoriesController>(MenuCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
