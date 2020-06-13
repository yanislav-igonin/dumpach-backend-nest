import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { BoardEntity } from '../../boards/entities';
import { PostEntity } from '../../posts/entities';

@Entity({ name: 'threads' })
export class ThreadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => BoardEntity,
    board => board.threads,
  )
  @JoinColumn({ name: 'board_id' })
  boardId: BoardEntity;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(
    type => PostEntity,
    post => post.threadId,
  )
  posts: PostEntity[];
}
