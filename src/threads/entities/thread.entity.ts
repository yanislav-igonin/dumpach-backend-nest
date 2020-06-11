import { PrimaryGeneratedColumn, Column, Entity,CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'threads' })
export class ThreadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'board_id ' })
  boardId: string;

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

  // TODO: add boards constraint
}
