import { Post } from './post.interface';

export interface Thread {
  id: number;
  boardId: string;
  posts?: Post[];
  createdAt: string;
  updatedAt: string;
}
