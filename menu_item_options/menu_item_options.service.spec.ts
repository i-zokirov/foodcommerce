import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemOptionsService } from './menu_item_options.service';

describe('MenuItemOptionsService', () => {
  let service: MenuItemOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuItemOptionsService],
    }).compile();

    service = module.get<MenuItemOptionsService>(MenuItemOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
