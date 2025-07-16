import { Injectable } from '@nestjs/common';
import { CreateCDto } from './dto/create-c.dto';
import { UpdateCDto } from './dto/update-c.dto';

@Injectable()
export class CsService {
  create(createCDto: CreateCDto) {
    return 'This action adds a new c';
  }

  findAll() {
    return `This action returns all cs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} c`;
  }

  update(id: number, updateCDto: UpdateCDto) {
    return `This action updates a #${id} c`;
  }

  remove(id: number) {
    return `This action removes a #${id} c`;
  }
}
