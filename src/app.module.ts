import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { ThreadsModule } from './threads/threads.module';
import { BoardsModule } from './boards/boards.module';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  {
    path: '/boards',
    module: BoardsModule,
    children: [
      {
        path: '/:boardId/threads',
        module: ThreadsModule,
        children: [
          {
            path: '/:threadId/posts',
            module: PostsModule,
          },
        ],
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    BoardsModule,
    ThreadsModule,
    PostsModule,
  ],
})
export class AppModule {}
