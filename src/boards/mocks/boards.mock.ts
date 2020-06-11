import { BoardEntity } from '../entities';

const boardsIds = ['b', 'dev', 'porn'];

const getBoards = (): BoardEntity[] => {
  return boardsIds.map(id => ({
    id,
    createdAt: new Date(),
    maxThreadsCount: 50,
    isActive: true,
  }));
};

const boards = getBoards();

export { boards };
