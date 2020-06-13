import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './entities';

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts(
    @Param('boardId') boardId: string,
    @Param('threadId', ParseIntPipe) threadId: number,
  ): Promise<PostEntity[]> {
    const posts = await this.postsService.getPosts(boardId, threadId);
    return posts;
  }
}
