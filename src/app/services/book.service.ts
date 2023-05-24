import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  deleteProduct(ISBN: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<BookDTO[]>('/api/books/');
  }

  getOne(ISBN: number) {
    return this.http.get<BookDTO>('/api/books/' + ISBN);
  }

  create(book: BookDTO){
    return this.http.post<BookDTO>('/api/books', book);
  }

  update(book: BookDTO) {
    return this.http.put<BookDTO>('/api/books/', book);
  }

  delete(ISBN: number) {
    return this.http.delete<BookDTO>('/api/books/' + ISBN);
  }

}
