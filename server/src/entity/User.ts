import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BookDTO, UserDTO } from "../../../models"

@Entity()
export class User implements UserDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    szisz: number;

    @Column()
    address: string;

    @Column()
    isActive:boolean;

    @OneToMany(() => User, user => user.borrowedBooks)
    borrowedBooks: BookDTO[];

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

}
