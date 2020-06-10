import { Injectable } from '@nestjs/common';
import { boards } from './mocks';
import { BoardEntity } from './entities';

@Injectable()
export class BoardsService {
  private readonly boards = boards;

  async getBoards(): Promise<BoardEntity[]> {
    return this.boards;
  }

  async getBoardById(boardId: string): Promise<BoardEntity> {
    return this.boards.filter(b => b.id === boardId)[0];
  }
}
