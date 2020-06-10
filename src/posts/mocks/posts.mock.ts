import { boards } from '../../boards/mocks';
import { threads } from '../../threads/mocks';
import { Post } from '../interfaces';

const getPost = (threadId: number, postId: number): Post => ({
  title: `Post №${postId}`,
  text: `Post №${postId} from Thread №${threadId}`,
  createdAt: `${new Date().toISOString()}`,
  threadId: threadId,
  isSage: false,
});

const getPosts = () => {
  const postsMap = boards.map(b => {
    return threads[b.id].reduce((acc, t) => {
      const posts = [];
      for (
        let postIndex = 1;
        postIndex <= threads[b.id].length * b.maxThreads;
        postIndex++
      ) {
        posts.push(getPost(t.id, postIndex));
      }

      acc[b.id][t.id] = posts;

      return acc;
    }, {});
  });

  return postsMap;
};

const posts = getPosts();

export { posts };
