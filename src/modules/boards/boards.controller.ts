import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller()
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  async getBoards() {
    const boards = await this.boardsService.getBoards();
    return { boards };
  }

  @Get(':boardId')
  async getBoardById(@Param('boardId') boardId: string) {
    const board = await this.boardsService.getBoardById(boardId);
    return board;
  }
}
