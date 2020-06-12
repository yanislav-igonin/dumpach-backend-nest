import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThreadEntity } from './entities';

@Injectable()
export class ThreadsService {
  constructor (
    @InjectRepository(ThreadEntity)
    private threadsRepository: Repository<ThreadEntity>,
  ) {}

  async getThreads(boardId: string, pageId: number): Promise<ThreadEntity[]> {
    // const board = this.boardsRepository.findOne(boardId);

    const threads = await this.threadsRepository.find({
      where :{ 
        boardId,
      },
      order: {
        updatedAt: 'DESC',
      },
      skip: pageId * 10,
    });

    return threads;
  };

  // async createThread(boardId: string, data: ThreadEntity): Promise<ThreadEntity> {
  //   // this.threads[boardId].push(data);
  //   return ThreadEntity;
  // }
}
