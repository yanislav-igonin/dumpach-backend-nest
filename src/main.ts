import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/**
 * GET /boards - list of all boards
 * GET /boards/:boardId - board info
 * GET /boards/:boardId/threads?page=1 - threads list
 * POST /boards/:boardId/threads - create thread
 * GET /boards/:boardId/threads/:threadId/posts - posts for thread
 * POST /boards/:boardId/threads/:threadId/posts - create post in thread
 */

/**
 * GET /boards - list of all boards
 * GET /boards/:boardId - board info
 * GET /threads?board=b&page=1 - threads list
 * POST /threads { boardId: b, ...} - create thread
 * GET /posts?board=b&thread=1 - posts for thread
 * POST /posts { boardId: b, threadId: 1, ...} - create post in thread
 */
