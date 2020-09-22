import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './entities';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardsRepository: Repository<BoardEntity>,
  ) {}

  async getBoards() {
    return this.boardsRepository.find();
  }

  async getBoardById(boardId: string) {
    const board = await this.boardsRepository.findOne(boardId);
    if (board === undefined) throw new NotFoundException('Board Not Found');
    return board;
  }
}
