import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';
import * as path from 'path';
import { ThreadsModule } from './threads/threads.module';
import { BoardsModule } from './boards/boards.module';
import { PostsModule } from './posts/posts.module';
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
      url: config.postgresUrl,
      entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      migrationsTableName: 'migrations',
      migrations: ['src/migrations/*.ts'],
      ssl: config.env === 'production',
      synchronize: config.env === 'production',
      logging: config.env === 'production',
    }),
    RouterModule.forRoutes(routes),
    BoardsModule,
    ThreadsModule,
    PostsModule,
  ],
})
export class AppModule {}
