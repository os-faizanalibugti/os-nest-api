import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';

@Injectable()
export class MobileService {
  loadLessons(start, end) {
    return of({
      count: 1,
      results: [
        {
          id: 'e8fcdcf4-e077-456a-9223-bcb708733f3b',
          subject: 'Math',
          title: 'Algebra',
          date: new Date(`2024-07-25 01:00`),
          length: 30,
          classroom: {
            id: 'b1e9280d-c447-4e31-8f5e-61194b355848',
            title: 'Math - Algebra',
            subject: {
              id: 2,
              title: 'English',
            },
            students: [
              {
                id: 15,
                first_name: 'Khusrau',
                last_name: 'Ohs',
              },
            ],
          },
          topic: null,
          cancellationCharge: true,
          teacher: {
            id: 2,
            first_name: 'Jane',
            last_name: 'Smith',
          },
          status: 'Missed',
        },
      ],
    });
  }

  create(createMobileDto: CreateMobileDto) {
    return 'This action adds a new mobile';
  }

  findAll() {
    return `This action returns all mobile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobile`;
  }

  update(id: number, updateMobileDto: UpdateMobileDto) {
    return `This action updates a #${id} mobile`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobile`;
  }
}
