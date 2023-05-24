import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../services/book.service';
import { CategoryDTO, BookDTO, UserDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class BookFormComponent implements OnInit {

  isNewProduct = true;

  users: UserDTO[] = [];

  categories: CategoryDTO[] = [];

  bookForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    Author: this.formBuilder.control(''),
    date: this.formBuilder.control(''),
    borrower: this.formBuilder.control<null | UserDTO>(null),
    categories: this.formBuilder.control<CategoryDTO[]>([])
  });
  
  toastrService: any;

  constructor(private formBuilder: FormBuilder,
    private bookService: BookService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private userService: UserService) {}

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id)
    {
      this.isNewProduct = false;

      this.bookService.getOne(id).subscribe({
        next: (book) =>  this.bookForm.setValue(book),
          error: (err) => { 
            console.error(err);
            this.toastrService.error('A könyv adatok betöltése sikertelen','Hiba');
          }
      });
    }

    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => {
        console.error(err);
        this.toastrService.error('A felhasználók betöltése sikertelen','Hiba');
      }
    });

    this.categoryService.getAll().subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => {
        console.error(err);
        this.toastrService.error('A kategória betöltése sikertelen','Hiba');
      }
    });
  }

    saveProduct()
    {
      const book = this.bookForm.value as BookDTO;

      if (this.isNewProduct)
      {
      this.bookService.create(book).subscribe({
        next: (book) => {this.toastr.success('Suiiii , id:' + book.id, 'Book created')},
        error: (err) => {this.toastr.error('Gatya', 'Hiba')}
      });
    }
    else{
      this.bookService.update(book).subscribe({
        next: (book) => {this.toastr.success('Suiiii , id:' + book.id, 'Book updated')},
        error: (err) => {this.toastr.error('Gatya', 'Hiba')}
    });
  }
  }

  compareObjects(obj1: any, obj2: any)
  {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

  
}


