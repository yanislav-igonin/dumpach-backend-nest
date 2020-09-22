import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';
import * as path from 'path';
import { ThreadsModule } from './modules/threads/threads.module';
import { BoardsModule } from './modules/boards/boards.module';
import { PostsModule } from './modules/posts/posts.module';
import { config } from './config';

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
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.db.url,
      entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      migrationsTableName: 'migrations',
      migrations: ['src/migrations/*.ts'],
      ssl: config.app.env === 'production',
      synchronize: config.app.env !== 'production',
      logging: config.app.env !== 'production',
    }),
    RouterModule.forRoutes(routes),
    BoardsModule,
    ThreadsModule,
    PostsModule,
  ],
})
export class AppModule {}
