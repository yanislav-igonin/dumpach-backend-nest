import { Post } from './post.interface';

export interface Thread {
  id: number;
  board_id: string;
  posts: Post[];
  created_at: string;
  updated_at: string;
}
