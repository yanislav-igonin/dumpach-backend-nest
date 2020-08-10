import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';
import { BoardEntity } from '../boards/entities';
import { PostEntity } from '../posts/entities';
import { ThreadEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, ThreadEntity, BoardEntity])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
})
export class ThreadsModule {}
