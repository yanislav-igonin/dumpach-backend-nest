import { boards } from '../../boards/mocks';
import { Thread } from '../interfaces';

const getThread = (boardId: string, threadId: number): Thread => {
  return {
    id: threadId,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    boardId,
  };
};

const getThreads = (): Record<string, Thread[]> => {
  const threadsMap = boards.reduce((acc, b) => {
    const threads: Thread[] = [];
    for (let threadIndex = 1; threadIndex <= 50; threadIndex++) {
      threads.push(getThread(b.id, threadIndex));
    }

    acc[b.id] = threads;

    return acc;
  }, {});

  return threadsMap;
};

const threads = getThreads();

export { threads };
