import { Module } from '@nestjs/common';
import { ThreadsModule } from './threads/threads.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [ThreadsModule, BoardsModule],
})
export class AppModule {}
