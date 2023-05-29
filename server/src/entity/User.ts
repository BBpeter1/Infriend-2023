import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BookDTO, UserDTO } from "../../../models"
import { Book } from "./Book"

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

}
