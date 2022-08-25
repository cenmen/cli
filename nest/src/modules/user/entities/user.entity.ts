import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: true })
  username: string;

  @Column({ length: 100, nullable: true })
  nickname: string;

  @Exclude()
  @Column({ select: false, nullable: true })
  password: string;

  @Column({ type: 'integer', nullable: true })
  age: number;

  @Column({ default: null })
  avatar: string;

  @Column({ default: null })
  email: string;

  @Column({ default: 'visitor' })
  role: string;

  @Column({
    name: 'create_time',
    type: 'integer',
    default: () => Date.now(),
  })
  createTime: number;

  @Exclude()
  @Column({
    name: 'update_time',
    type: 'integer',
    default: () => Date.now(),
  })
  updateTime: number;
}
