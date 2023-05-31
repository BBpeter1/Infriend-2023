import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './product-form/product-form.component';
import { BookListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OverdueBooksComponent } from './overdue-books/overdue-books.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: BookListComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'product-form',
    component: BookFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'product-form/:id',
    component: BookFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'user-form',
    component: UserFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'user-form/:id',
    component: UserFormComponent,
    canActivate: [() => inject(AuthService).preventGuestAccess()]
  },
  {
    path: 'overdue-books',
    canActivate: [() => inject(AuthService).preventGuestAccess()],
    component: OverdueBooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
