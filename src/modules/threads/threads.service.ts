import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from '../boards/entities';
import { PostEntity } from '../posts/entities';
import { ThreadEntity } from './entities';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardsRepository: Repository<BoardEntity>,
    @InjectRepository(ThreadEntity)
    private threadsRepository: Repository<ThreadEntity>,
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  async getThreads(boardId: string, pageId: number) {
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
  }

  async createThread(boardId: string, threadData: { post: PostEntity }) {
    const board = await this.boardsRepository.findOne(boardId);

    if (board === undefined) throw new NotFoundException('Board Not Found');

    const thread = await this.threadsRepository.create({ boardId: board });

    const post = await this.postsRepository.create(threadData.post)

    // TODO: Add files parsing

    return thread.id;
  }
}
