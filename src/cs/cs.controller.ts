import { Controller, Get, Param, Query } from '@nestjs/common';
import { CsService } from './cs.service';
import { of } from 'rxjs';

@Controller('v2')
export class CsController {
  constructor(private readonly csService: CsService) {}

  @Get('cs/conversations')
  async chatMessages(@Query('active') active) {
    console.log(active);
    return of({
      count: 200,
      pageSize: 10,
      next: null,
      previous: null,
      results: [
        {
          id: 'e20a2aab-a258-45e0-bbcb-a697b0d1014f',
          name: `Student Meeting - ${active}`,
          category: {
            id: 2,
            title: 'Academic',
          },
          active: Boolean(active),
          preview: {
            text: 'I’d like a meeting to discuss the student’s progress',
            timestamp: '2025-05-06 00:30+0000',
          },
          sender: {
            id: 1,
            first_name: 'S',
            last_name: 'I',
          },
        },
        {
          id: 'b4b465de-08b5-485a-9206-152899b65f08',
          name: 'Missing homework',
          category: {
            id: 3,
            title: 'Administrative',
          },
          active: Boolean(active),
          students: [{ id: 1, first_name: 'Luke', last_name: 'Wick' }],
          preview: {
            text: 'I can’t find my homework on the site',
            timestamp: '2025-05-06 00:30+0000',
          },
          sender: {
            id: 1,
            first_name: 'S',
            last_name: 'I',
          },
        },
      ],
    });
  }

  @Get('cs/conversations/:id/detail')
  async chatMessageDetail(@Param('id') id) {
    return of({
      id,
      name: 'Student Meeting',
      category: {
        id: 2,
        title: 'Academic',
      },
      active: true,
      preview: {
        text: 'I’d like a meeting to discuss the student’s progress',
        timestamp: '2025-05-06 00:30+0000',
      },
      messages: [
        {
          id: '67f62fc0-94e0-468e-8148-adf728929299',
          conversation_id: 'e20a2aab-a258-45e0-bbcb-a697b0d1014f',
          type: 'text',
          content: 'I’d like a meeting to discuss the student’s progress',
          timestamp: 1746491439.645118,
          attachments: [],
          status: 'Delivered',
          sender: {
            id: 1,
            first_name: 'S',
            last_name: 'I',
          },
        },
      ],
    });
  }
}
