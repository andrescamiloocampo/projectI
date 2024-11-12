import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,    
    unique: true
  })    
  name: string;

  @Column('numeric', {
    nullable: false,
    unique: true
  })
  code: number;
}
