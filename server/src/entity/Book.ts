import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookDTO, StatusDTO, UserDTO } from '../../../models';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Book implements BookDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, type: 'text'})
    title: string;

    @Column({nullable: true, type: 'text' })
    description: string;

    @Column({nullable: true, type: 'text' })
    Author: string;

    @Column({nullable: true, type: 'date' })
    date: string;

    @Column({nullable: true, type: 'date' })
    borrowDate: string;

    @Column({nullable: true, type: 'text' })
    status: string;

    @ManyToOne(() => User, user => user.borrowedBooks, {eager:true})
    borrower: User;

    @ManyToMany(() => Category, { eager:true })
    @JoinTable()
    categories: Category[];
}