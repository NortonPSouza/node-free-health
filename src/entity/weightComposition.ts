import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class WeightComposition {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    weight_body: number

    @Column()
    weight_fat: number

    @Column()
    weight_muscle: number

    @Column()
    percentage_fat: number

    @Column()
    percentage_muscle: number

    @OneToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({
        name: 'id_user'
    })
    user: User
}