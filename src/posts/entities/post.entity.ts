import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BoardEntity } from '../../boards/entities';
import { ThreadEntity } from '../../threads/entities';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ name: 'is_sage' })
  isSage: boolean;

  @ManyToOne(
    () => BoardEntity,
    board => board.threads,
  )
  @JoinColumn({ name: 'board_id' })
  boardId: BoardEntity;

  @ManyToOne(
    () => ThreadEntity,
    thread => thread.posts,
  )
  @JoinColumn({ name: 'thread_id' })
  threadId: ThreadEntity;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;
}
