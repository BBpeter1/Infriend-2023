export interface UserDTO {
    id: number;
    name: string;
    phone: number;
    szisz: number;
    address: string;
    isActive: boolean;
   // borrowedBooks: number[];
}

export interface CategoryDTO {
    id: number;
    title: string;
}

export interface StatusDTO {
    id: number;
    title: string;
}

export interface BookDTO {
    id: number;
    title: string;
    description: string;
    Author: string;
    date: string;
    borrower: null | UserDTO;
    categories: CategoryDTO[];
    status: StatusDTO[];
}
