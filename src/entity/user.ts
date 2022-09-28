import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    name: string

    @Column()
    birthday: Date

    @Column()
    heigth: number

}
