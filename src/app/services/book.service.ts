import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDTO } from 'models';
import { Book } from 'server/src/entity/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
  ];
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<BookDTO[]>('/api/books/');
  }

  getOne(id: number) {
    return this.http.get<BookDTO>('/api/books/' + id);
  }

  create(book: BookDTO){
    return this.http.post<BookDTO>('/api/books', book);
  }

  update(book: BookDTO) {
    return this.http.put<BookDTO>('/api/books/', book);
  }

  delete(id: number) {
    return this.http.delete<BookDTO>('/api/books/' + id);
  }

}
