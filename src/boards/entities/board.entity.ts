import { PrimaryColumn, Column, CreateDateColumn, Entity } from 'typeorm';

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
  maxThreads: number;
}
