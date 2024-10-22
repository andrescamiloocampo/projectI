import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Location } from "../../user/entities/location.entity";
import { IsNotEmpty } from "class-validator";
import { WeatherE,ScheduleE } from "src/models/prediction.models";


@Entity()
export class Prediction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(                     //TODO: should be OneToOne Relation
        () => Location,
        Location => Prediction,
        { cascade: true, eager: true }   //barrio
    )
    location: Location;


    @ManyToOne(                         //TODO: should be OneToOne Relation
        () => User,
        user => user.prediction,
        { cascade: true, eager: true }   //jaimito
    )
    user: User;

    //weather

    @Column({
        type: 'enum',
        enum: WeatherE,
        default: WeatherE.warm,
        nullable: false
    })
    weather: WeatherE;

    //schedule

    @Column({
        type: 'enum',
        enum: ScheduleE,
        default: ScheduleE.morning,
        nullable: false
    })
    schedule: ScheduleE;


    @Column('numeric')
    expectedTime: Number;

    @Column('numeric')
    realTime: Number;


}

