import { boards } from '../../boards/mocks'
import { Thread, Post } from '../interfaces';

const getPost = (threadId: number, postId: number): Post => ({
  created_at: `${new Date()}`,
  title: `Post №${postId}`,
  text: `Post №${postId} from Thread №${threadId}`,
  thread_id: threadId,
  is_sage: false,
});

const getThread = (boardId: string, threadId: number): Thread => {
  const posts = [];
  for (let postIndex = 1; postIndex <= 50; postIndex++) {
    posts.push(getPost(threadId, postIndex));
  }

  return {
    id: threadId,
    created_at: `${new Date()}`,
    updated_at: `${new Date()}`,
    posts,
    board_id: boardId,
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
