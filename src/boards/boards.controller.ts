import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardEntity } from './entities';

@Controller()
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  async getBoards(): Promise<BoardEntity[]> {
    const boards = await this.boardsService.getBoards();
    return boards;
  }

  @Get(':boardId')
  async getBoardById(@Param('boardId') boardId: string): Promise<BoardEntity> {
    const board = await this.boardsService.getBoardById(boardId);
    return board;
  }
}
