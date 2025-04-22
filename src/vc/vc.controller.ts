import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';
import { VcService } from './vc.service';

@Controller('v2/vc')
export class VcController {
  constructor(private readonly vcService: VcService) {}

  @Post('generate-creds/:lessonId')
  async meeting(@Headers() headers, @Param('lessonId') lessonId) {
    return this.vcService.generateToken(headers, lessonId);
  }

  @Post()
  create(@Body() createVcDto: CreateVcDto) {
    return this.vcService.create(createVcDto);
  }

  @Get()
  findAll() {
    return this.vcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVcDto: UpdateVcDto) {
    return this.vcService.update(+id, updateVcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vcService.remove(+id);
  }
}
