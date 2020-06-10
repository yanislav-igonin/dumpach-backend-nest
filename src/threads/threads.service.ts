import { Injectable } from '@nestjs/common';
import { threads } from './mocks';
import { Thread } from './interfaces';

@Injectable()
export class ThreadsService {
  private readonly threads = threads;

  async getThreads(boardId: string, pageId: number): Promise<Thread[]> {
    const threads = this.threads[boardId].sort((t1, t2) => {
      if (t1.updatedAt > t2.updatedAt) return 1;
      if (t1.updatedAt < t2.updatedAt) return -1;
      return 0;
    });

    return threads.slice(10 * pageId, 10 * pageId + 10);
  }

  async createThread(boardId: string, data: Thread): Promise<Thread> {
    this.threads[boardId].push(data);
    return data;
  }
}
