import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //? a chave primaria coloquei como autoincrement numerico, porem eu sempre gosto de colocar UUID em tabelas que armazenam dados sensiveis
  id: number; //? ex: usuarios, address, etc

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
