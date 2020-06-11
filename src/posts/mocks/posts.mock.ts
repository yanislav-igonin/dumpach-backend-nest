import { Post } from '../interfaces';

const getPost = (threadId: number, postId: number): Post => ({
  title: `Post №${postId}`,
  text: `Post №${postId} from Thread №${threadId}`,
  createdAt: `${new Date().toISOString()}`,
  threadId: threadId,
  isSage: false,
});

const posts: Record<string, Array<Post[]>> = {
  b: [
    [getPost(1, 1), getPost(1, 2)],
    [getPost(2, 3), getPost(2, 4)],
  ],
  dev: [
    [getPost(1, 1), getPost(1, 2)],
    [getPost(2, 3), getPost(2, 4)],
  ],
  porn: [
    [getPost(1, 1), getPost(1, 2)],
    [getPost(2, 3), getPost(2, 4)],
  ],
};

export { posts };
