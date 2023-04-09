import { Test, TestingModule } from '@nestjs/testing';
import { MenuCategoriesService } from './menu_categories.service';

describe('MenuCategoriesService', () => {
  let service: MenuCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuCategoriesService],
    }).compile();

    service = module.get<MenuCategoriesService>(MenuCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
