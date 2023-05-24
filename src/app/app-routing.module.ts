import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './product-form/product-form.component';
import { BookListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'product-form',
    component: BookFormComponent
  },
  {
    path: 'product-form/:id',
    component: BookFormComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'user-form/:id',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
