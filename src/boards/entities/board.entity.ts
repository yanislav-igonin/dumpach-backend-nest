import { PrimaryColumn, Column, CreateDateColumn, Entity, OneToMany } from 'typeorm';
import { ThreadEntity } from '../../threads/entities';

@Entity({ name: 'boards' })
export class BoardEntity {
  @PrimaryColumn()
  id: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({ name: 'max_threads_count' })
  maxThreadsCount: number;

  // @Column({ name: 'threads' })
  @OneToMany(type => ThreadEntity, thread => thread.boardId)
  threads: ThreadEntity[];
}
