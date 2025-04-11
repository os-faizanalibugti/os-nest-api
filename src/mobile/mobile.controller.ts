import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';
import { MobileService } from './mobile.service';

@Controller('v2/mobile')
export class MobileController {
  constructor(private readonly mobileService: MobileService) {}

  // api/v2/mobile/lessons
  @Get('lessons')
  loadLessons(@Query('date') date: string, @Query('end') end: string) {
    return this.mobileService.loadLessons(date, end);
  }

  // GET api/v2/mobile/lessons/:lessonId/detail
  @Get('lessons/:lessonId/detail')
  loadLessonDetail(@Param('lessonId') lessonId: string) {
    return this.mobileService.loadLessonDetail(lessonId);
  }

  @Post()
  create(@Body() createMobileDto: CreateMobileDto) {
    return this.mobileService.create(createMobileDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMobileDto: UpdateMobileDto) {
    return this.mobileService.update(+id, updateMobileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobileService.remove(+id);
  }
}
