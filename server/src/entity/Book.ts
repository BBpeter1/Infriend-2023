import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookDTO, StatusDTO, UserDTO } from '../../../models';
import { User } from './User';
import { Category } from './Category';

@Entity()
export class Book implements BookDTO {
    borrower: UserDTO;
    status: StatusDTO[];

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, type: 'text'})
    title: string;

    @Column({nullable: true, type: 'text' })
    description: string;

    @Column()
    Author: string;

    @Column({nullable: true})
    date: string;

  //  @ManyToOne(() => User, user => user.products, {eager:true})
    //borrower: User;

    @ManyToMany(() => Category, { eager:true })
    @JoinTable()
    categories: Category[];
}