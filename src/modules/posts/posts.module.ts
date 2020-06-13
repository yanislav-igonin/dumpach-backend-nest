import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { BoardEntity } from '../boards/entities';
import { ThreadEntity } from '../threads/entities';
import { PostEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, ThreadEntity, BoardEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
