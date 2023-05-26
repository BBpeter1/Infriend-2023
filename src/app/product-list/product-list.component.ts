import { Component, OnInit } from '@angular/core';
import { CategoryDTO, BookDTO } from 'models';
import { BookService } from '../services/book.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class BookListComponent implements OnInit {

  books: BookDTO[] = [];
  toastrService: any;
  filteredBooks: BookDTO[] = [];
  searchTerm: string = '';


  constructor(private bookService: BookService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      {
        next: (books) => {this.books = books},
        error: (err) => {this.toastr.error('Hiba')},
      }
    );
  }

  navigateToProductForm(id:number) {
    this.router.navigate(['/product-form',id]);
  }

  deleteBook(book: BookDTO) {

    this.bookService.delete(book.id).subscribe({
      next: () =>
      {
        const index = this.books.indexOf(book);
        if(index > -1) {
          this.books.splice(index, 1);
        }
      },
        error: (err) =>{
          console.error(err);
          this.toastrService.error('Hiba a könyv törlésekor', 'Hiba');
        }
    });
  }
  
  searchBooks() {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    this.filteredBooks = this.books.filter(
      book => book.title.toLowerCase().includes(searchTerm) || book.Author.toLowerCase().includes(searchTerm)
    ).sort((a, b) => a.title.localeCompare(b.title));
  }
  

  getCategoryList(categories: CategoryDTO[]): string 
  {
    return categories.map((category) => category.title).join(", ");
  }

}
