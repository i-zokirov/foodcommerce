import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemDto } from './create-menu_item.dto';

export class UpdateMenuItemDto extends PartialType(CreateMenuItemDto) {}
