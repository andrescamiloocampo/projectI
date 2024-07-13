import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Entity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
      nullable: false,
      unique: true  
    })
    username: string;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;

    @Column({default: true})    
    isActive: boolean;    

    @Column('text')
    password: string;

    @OneToMany(
      () => Vehicle,
      vehicle => vehicle.user,
      {cascade: true, eager: true}
    )
    vehicles: Vehicle[]
}
