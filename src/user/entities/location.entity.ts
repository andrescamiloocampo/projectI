import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Prediction } from "../../prediction/entities/prediction.entity";


@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;



    @Column({type:'text',nullable:true})
    latitude?: string;

    @Column({type:'text',nullable:true})
    altitude?: string;

    @OneToMany(                               //TODO: should be OneToOne Relation
        () => User,
        user => user.location,
        {cascade: true, eager: true}
      )
      user: User

      @OneToMany(                             //TODO: should be OneToOne Relation
        () => Prediction, 
        prediction => prediction.location,
        {cascade: false, eager: false}
      )
      prediction: Prediction
    
  
}