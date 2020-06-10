import { Module } from '@nestjs/common';
import {RouterModule, Routes} from 'nest-router'
import { ThreadsModule } from './threads/threads.module';
import { BoardsModule } from './boards/boards.module';

const routes: Routes = [
  {
    path: '/boards',
    module: BoardsModule,
    children: [
      {
        path: '/:boardId/threads',
        module: ThreadsModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), ThreadsModule, BoardsModule],
})
export class AppModule {}
