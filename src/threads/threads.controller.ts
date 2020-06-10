import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Thread } from './interfaces';

@Controller()
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get()
  async getThreads(
    @Param('boardId') boardId: string,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) pageId: number,
  ): Promise<Thread[]> {
    const threads = await this.threadsService.getThreads(boardId, pageId);
    return threads;
  }

  @Post()
  async createThread(@Body() createThreadDto) {
    return {};
  }
}
