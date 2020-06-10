import { boards } from '../../boards/mocks';
import { threads as threadsMap } from '../../threads/mocks';
import { Post } from '../interfaces';
import { Thread } from '../../threads/interfaces';

const getPost = (threadId: number, postId: number): Post => ({
  title: `Post №${postId}`,
  text: `Post №${postId} from Thread №${threadId}`,
  createdAt: `${new Date().toISOString()}`,
  threadId: threadId,
  isSage: false,
});


/**
 * {
 *  b: [[Post[]], [Post[]]]
 * }
 */
// const getPosts = (): Record<string, Array<Post[]>> => {
//   const postsMap = boards.reduce((acc, board) => {
//     acc[board.id] = [];

//     const threads = threadsMap[board.id];
//     const postIndex = 1;

//     const posts = threads.map((thread) => {
//       for (let postPerThreadCount = 1; postPerThreadCount <= 500; postPerThreadCount++) {

//       }
//     })

//     return acc;
//   }, {});

//   return postsMap
// };

// const posts = getPosts();
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
