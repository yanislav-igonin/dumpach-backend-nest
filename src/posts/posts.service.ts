import { Injectable, NotFoundException } from '@nestjs/common';
import { posts } from './mocks';
import { Post } from './interfaces';

@Injectable()
export class PostsService {
  private readonly posts = posts;

  async getPosts(boardId: string, threadId: number): Promise<Post[]> {
    const isBoardExists = this.posts[boardId] !== undefined;

    if (!isBoardExists) throw new NotFoundException();

    const isThreadExists = this.posts[boardId][threadId] !== undefined;

    if (!isThreadExists) throw new NotFoundException();

    return this.posts[boardId][threadId];
  }
}
