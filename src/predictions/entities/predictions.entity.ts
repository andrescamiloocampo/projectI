import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { WeatherE,ScheduleE } from "src/models/prediction.models";


@Entity()
export class Predictions {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(                         
        () => User,
        user => user.prediction,
        { cascade: true, eager: true }   
    )
    user: User;
    

    @Column({
        type: 'text',
        nullable: false        
    })
    ruta: string;

    @Column({
        type: 'text',
        nullable: false
    })
    barrio: string;

    
    @Column({
        type: 'enum',
        enum: ScheduleE,
        default: ScheduleE.morning,
        nullable: false
    })
    horario: ScheduleE;

    @Column({
        type: 'enum',
        enum: WeatherE,
        default: WeatherE.warm,
        nullable: false
    })
    clima: WeatherE;
    
    @Column('numeric')
    tiempo_real: Number;

    @Column('numeric')
    tiempo_esperado: Number;

    @Column('numeric')
    tiempo_perdido: Number;

}

