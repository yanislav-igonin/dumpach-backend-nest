import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from '../boards/entities';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';
import { ThreadEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ThreadEntity, BoardEntity])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
})
export class ThreadsModule {}
