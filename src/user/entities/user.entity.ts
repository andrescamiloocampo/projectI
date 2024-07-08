import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
      nullable: false   
    })
    username: string;

    @Column('text')
    lastName: string;

    @Column({default: true})    
    isActive: boolean;    

    @Column('text')
    password: string;
}
