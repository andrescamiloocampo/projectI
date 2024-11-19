import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { WeatherE, ScheduleE } from 'src/models/prediction.models';

@Entity()
export class Predictions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.prediction, {
    onDelete: 'CASCADE'
  })
  user: User;

  @Column({
    type: 'text',
    nullable: false,
  })
  ruta: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  barrio: string;

  @Column({
    type: 'enum',
    enum: ScheduleE,
    default: ScheduleE.morning,
    nullable: false,
  })
  horario: ScheduleE;

  @Column({
    type: 'enum',
    enum: WeatherE,
    default: WeatherE.warm,
    nullable: false,
  })
  clima: WeatherE;

  @Column({ type: 'numeric'})
  tiempo_real?: Number;

  @Column({ type: 'numeric'})
  tiempo_esperado?: Number;

  @Column({ type: 'numeric'})
  tiempo_perdido?: Number;
}
