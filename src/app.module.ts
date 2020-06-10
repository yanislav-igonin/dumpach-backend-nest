import { Module } from '@nestjs/common';
import { ThreadsModule } from './threads/threads.module';

@Module({
  imports: [ThreadsModule],
})
export class AppModule {}
