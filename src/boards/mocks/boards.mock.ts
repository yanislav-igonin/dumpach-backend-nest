import { Board } from '../interfaces';

const boardsIds = ['b', 'dev', 'porn'];

const getBoards = (): Board[] => {
  return boardsIds.map(id => ({
    id,
    createdAt: `${new Date().toISOString()}`,
    maxThreads: 50,
  }));
};

const boards = getBoards();

export { boards };
