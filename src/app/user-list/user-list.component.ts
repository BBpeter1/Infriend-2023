import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDTO } from 'models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: UserDTO[] = [];
  toastrService: any;

  constructor(private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.userService.getAll().subscribe(
      {
        next: (users) => {this.users = users},
        error: (err) => {this.toastr.error('Hiba')},
      }
    );
  }

  navigateToUserForm(id:number) {
    this.router.navigate(['/user-form',id]);
  }

  deleteUser(user: UserDTO) {
    user.isActive = false;
  }

}

