import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  document: string;

  @Column()
  name: string;

  @Column()
  surnme: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column({ default: 'user' })
  rol: string;

  @Column()
  date_birth: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
