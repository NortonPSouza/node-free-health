import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Token {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    token: string

    @Column()
    expires_in: number

    @OneToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({
        name: 'id_user'
    })
    user: User
}