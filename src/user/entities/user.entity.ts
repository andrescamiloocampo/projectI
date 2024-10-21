
import { Entity,Column,PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { File,Location } from './'
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
      nullable: false,
      unique: true  
    })
    username: string;

    @Column('text',{
      nullable: false,
      unique: true  
    })
    email: string;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;

    @Column('numeric')
    creationDate: number;

    @Column({default: true})    
    isActive: boolean;    

    @Column('text')
    password: string;


    @ManyToOne(
      () => File,
      file => file.user,
      {cascade: false,nullable:true , eager: false}
    )
    file?: File

    @ManyToOne(
      () => Location,
      location => location.user,
      {cascade: false, eager: false}
    )
    location: Location
 }

