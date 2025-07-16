import { PartialType } from '@nestjs/mapped-types';
import { CreateCDto } from './create-c.dto';

export class UpdateCDto extends PartialType(CreateCDto) {}
