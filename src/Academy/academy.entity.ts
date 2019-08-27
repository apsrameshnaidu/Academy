import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Academy {
  @PrimaryGeneratedColumn()
  sno: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  location: string;

  @Column('text')
  description: string;
  
  @Column('text')
  image: number;
}
