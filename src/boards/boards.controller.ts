import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './interfaces';

@Controller()
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  async getBoards(): Promise<Board[]> {
    const boards = await this.boardsService.getBoards();
    return boards;
  }

  @Get(':boardId')
  async getBoardById(@Param('boardId') boardId: string): Promise<Board> {
    const board = await this.boardsService.getBoardById(boardId);
    return board;
  }
}
