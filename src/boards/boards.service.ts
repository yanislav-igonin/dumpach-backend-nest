import { Injectable } from '@nestjs/common';
import { boards } from './mocks';
import { Board } from './interfaces';

@Injectable()
export class BoardsService {
  private readonly boards = boards;

  async getBoards(): Promise<Board[]> {
    return this.boards;
  }

  async getBoardById(boardId: string): Promise<Board> {
    return this.boards.filter(b => b.id === boardId)[0];
  }
}
