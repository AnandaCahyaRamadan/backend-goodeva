import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum TodoStatus {
  CREATED = 'created',
  COMPLETED = 'completed',
  ON_GOING = 'on_going',
  PROBLEM = 'problem',
}

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({
    type: 'enum',
    enum: TodoStatus,
    enumName: 'status',
    default: TodoStatus.CREATED,
  })
  status: TodoStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  problem_desc?: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
