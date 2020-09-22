import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Post,
  Query,
  UseInterceptors,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { ThreadsService } from './threads.service';
import { ThreadEntity } from './entities';

@Controller()
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get()
  async getThreads(
    @Param('boardId') boardId: string,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) pageId: number,
  ) {
    const threads = await this.threadsService.getThreads(boardId, pageId);
    return { threads };
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files', 5))
  async createThread(@UploadedFiles() files, @Body() body) {
    console.log('DEBUG: files', files);
    console.log('DEBUG: body', body);
    return 1;
  }
}
