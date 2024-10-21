import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";



@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    latitude: string;

    @Column('text')
    altitude: string;

    @OneToMany(
        () => User,
        user => user.location,
        {cascade: true, eager: true}
      )
      user: User
  
}