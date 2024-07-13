import { User } from "src/user/entities/user.entity";
import { Column,Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    plate: string;

    @Column('text')
    route: string;
      
    @ManyToOne(
        () => User,
        (user) => user.vehicles        
    )
    user: User;
}
