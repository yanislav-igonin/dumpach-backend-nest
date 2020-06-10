import { BoardEntity } from '../entities/board.entity';

const boardsIds = ['b', 'dev', 'porn'];

const getBoards = (): BoardEntity[] => {
  return boardsIds.map(id => ({
    id,
    createdAt: new Date(),
    maxThreads: 50,
    isActive: true,
  }));
};

const boards = getBoards();

export { boards };
