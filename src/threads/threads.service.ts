import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThreadEntity } from './entities';
import { BoardsService } from '../boards/boards.service';

@Injectable()
export class ThreadsService {
  constructor (
    @InjectRepository(ThreadEntity)
    private threadsRepository: Repository<ThreadEntity>,
    // @InjectRepository(BoardEntity)
    private boardsService: BoardsService,
  ) {}

  async getThreads(boardId: string, pageId: number): Promise<ThreadEntity[]> {
    // const board = this.boardsRepository.findOne(boardId);

    const threads = await this.threadsRepository.find({
      where :{ 
        boardId,
      },
      order: {
        updatedAt: 'DESC',
      }
    });

    return threads;
  };

  // async createThread(boardId: string, data: ThreadEntity): Promise<ThreadEntity> {
  //   // this.threads[boardId].push(data);
  //   return ThreadEntity;
  // }
}
