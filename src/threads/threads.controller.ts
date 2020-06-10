import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Thread } from './interfaces';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get(':boardId/:pageId')
  async getThreads(
    @Param('boardId') boardId: string,
    @Param('pageId', ParseIntPipe) pageId: number,
  ): Promise<Thread[]> {
    const threads = await this.threadsService.getThreads(boardId, pageId);
    return threads;
  }

  @Get(':boardId/threads/:threadId')
  async getThreadById(
    @Param('boardId') boardId: string,
    @Param('threadId', ParseIntPipe) threadId: number,
  ): Promise<Thread> {
    const thread = await this.threadsService.getThreadById(boardId, threadId);
    console.log('DEBUG: ThreadsController -> constructor -> thread', thread);
    return thread;
  }

  @Post()
  async createThread(@Body() createThreadDto) {
    return {};
  }
}
