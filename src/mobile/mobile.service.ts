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

  loadLessonDetail(lessonId) {
    return of({
      id: '4fd7754d-4966-42d0-b8f8-d9439e7c526e',
      title: 'Maths GCSE',
      subtitle: 'Arslan Khan',
      topic: 'Topic',
      date: 1703779200.0,
      length: 60,
      tags: ['MATHS'],
      status: 'Scheduled',
      is_closed: true,
      announcements: [
        {
          type: 'info-lesson',
          id: '4fd7754d-4966-42d0-b8f8-d9439e7c526e',
          title: 'Lesson information',
          length: 60,
          date: 1703779200.0,
          teacher: 'Arslan Khan',
          topic: 'Topic',
          class: 'Maths GCSE',
          student: 'Yusra Asim',
          timestamp: 1703437404.529273,
          content:
            'Your lesson is scheduled for 60 minutes on {{ lesson_date }}',
          context: {
            lesson_date: 1703779200.0,
          },
        },
        {
          id: 'chg_a15bcb95-045d-4783-ab91-ee58c53610c6',
          timestamp: 1703668334.61223,
          sender_id: 6,
          type: 'announcement',
          title: 'Lesson changed',
          content:
            'The teacher requested to change the lesson to {{ lesson_date }} for {{ lesson_length }} mins. You accepted the change.',
          status: 'confirmed',
          context: {
            lesson_date: 1703779200.0,
            lesson_length: 60,
          },
          recall_change_allowed: false,
          accept_change_allowed: false,
        },
        {
          id: 'chg_fd991b79-c786-4fa6-b4ec-1ae3f8786a21',
          timestamp: 1704734489.677157,
          sender_id: 2,
          type: 'request',
          title: 'Change lesson',
          content:
            'You requested to change the lesson to {{ lesson_date }} for {{ lesson_length }} mins',
          status: 'pending',
          context: {
            lesson_date: 1704704400.0,
            lesson_length: 60,
          },
          recall_change_allowed: true,
          accept_change_allowed: false,
        },
      ],
      messages: [
        {
          id: 'lsnmsg_49f79ebf-0632-4c4f-8254-540511096167',
          timestamp: 1703612469.259707,
          sender: {
            id: 1,
            first_name: 'John',
            last_name: 'Wick',
            school: null,
          },
          content: 'Can we change the lesson to another time?',
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 1,
        },
        {
          id: 'lsnmsg_64a90579-3ddf-4c5f-ac4a-be4bc0c62623',
          timestamp: 1703612588.461617,
          sender: {
            id: 2,
            first_name: 'Yusra',
            last_name: 'Asim',
            school: null,
          },
          content: 'I am running a little late, I will be there shortly',
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 2,
        },
        {
          id: 'lsnmsg_a08a3a07-be78-4f5a-a26c-78639de3eb89',
          timestamp: 1703613568.110636,
          sender: {
            id: 2,
            first_name: 'Yusra',
            last_name: 'Asim',
            school: null,
          },
          content: "I am sorry, I can't make it to the class today",
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 2,
        },
        {
          id: 'lsnmsg_6e959c82-06ec-449d-af39-ed8d93763d8e',
          timestamp: 1703693355.165743,
          sender: {
            id: 1,
            first_name: 'John',
            last_name: 'Wick',
            school: null,
          },
          content: "Yes I'm just getting there.",
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 1,
        },
        {
          id: 'lsnmsg_8ef4727d-00c8-4c18-b6fb-e0b9f6edae47',
          timestamp: 1703693398.643623,
          sender: {
            id: 2,
            first_name: 'Yusra',
            last_name: 'Asim',
            school: null,
          },
          content: 'I am waiting in the meeting to start',
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 2,
        },
        {
          id: 'lsnmsg_aa8ffc44-6ad2-4d4a-ac5f-018d7988db89',
          timestamp: 1703762522.654876,
          sender: {
            id: 2,
            first_name: 'Yusra',
            last_name: 'Asim',
            school: null,
          },
          content: 'I am running a little late, I will be there shortly',
          msg_status: 'Waiting',
          recipients: [],
          type: 'message',
          title: 'Message',
          sender_id: 2,
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
