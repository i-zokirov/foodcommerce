import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemOptionDto } from './create-menu_item_option.dto';

export class UpdateMenuItemOptionDto extends PartialType(CreateMenuItemOptionDto) {}
