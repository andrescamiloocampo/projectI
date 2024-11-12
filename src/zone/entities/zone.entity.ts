import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Zone {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false,
        unique: true
    })
    name: string;

    @Column('numeric',{
        nullable: false,
        unique: true,
    })
    code: number;

    @Column('text',{
        nullable:false
    })
    distance: string;
}
