import { PrimaryColumn, Column, CreateDateColumn, Entity } from 'typeorm';

@Entity({ name: 'boards'})
export class BoardEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'boolean', default: true, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'int', name: 'max_threads_count' })
  maxThreads: number
}