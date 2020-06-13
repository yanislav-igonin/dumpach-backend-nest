import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from '../boards/entities';
import { ThreadEntity } from '../threads/entities';
import { PostEntity } from './entities';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardsRepository: Repository<BoardEntity>,
    @InjectRepository(ThreadEntity)
    private threadsRepository: Repository<ThreadEntity>,
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  async getPosts(boardId: string, threadId: number): Promise<PostEntity[]> {
    const board = await this.boardsRepository.findOne(boardId);

    if (board === undefined) throw new NotFoundException('Board Not Found');

    const thread = await this.threadsRepository.findOne(threadId);

    if (thread === undefined) throw new NotFoundException('Thread Not Found');

    const posts = await this.postsRepository.find({ 
      where: {
        threadId,
      },
      order: {
        createdAt: 'ASC',
      },
    });

    return posts;
  }
}
