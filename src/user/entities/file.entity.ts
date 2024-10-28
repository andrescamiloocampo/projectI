import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";



@Entity()
export class File {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'text'})
    image: string;

    @OneToMany(
        () => User,
        user => user.file,
        {cascade: true, eager: true}
      )
      user: User
  
}