import { PartialType } from '@nestjs/swagger';
import { CreateMenuItemOptionDto } from './create-menu_item_option.dto';

export class UpdateMenuItemOptionDto extends PartialType(CreateMenuItemOptionDto) {}
