import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from '../boards/entities';
import { ThreadEntity } from './entities';

@Injectable()
export class ThreadsService {
  constructor (
    @InjectRepository(BoardEntity)
    private boardsRepository: Repository<BoardEntity>,
    @InjectRepository(ThreadEntity)
    private threadsRepository: Repository<ThreadEntity>,
  ) {}

  async getThreads(boardId: string, pageId: number): Promise<ThreadEntity[]> {
    const board = await this.boardsRepository.findOne(boardId);

    if (board === undefined) throw new NotFoundException('Board Not Found');

    const threads = await this.threadsRepository.find({
      where: { 
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
