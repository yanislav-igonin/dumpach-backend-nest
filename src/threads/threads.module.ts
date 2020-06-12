import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';
import { ThreadEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ThreadEntity])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
})
export class ThreadsModule {}
