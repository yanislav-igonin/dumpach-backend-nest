import { boards } from '../../boards/mocks';
import { ThreadEntity } from '../entities';

const getThread = (boardId: string, threadId: number): ThreadEntity => {
  return {
    id: threadId,
    createdAt: new Date(),
    updatedAt: new Date(),
    boardId,
  };
};

const getThreads = (): Record<string, ThreadEntity[]> => {
  const threadsMap = boards.reduce((acc, b) => {
    const threads: ThreadEntity[] = [];
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
