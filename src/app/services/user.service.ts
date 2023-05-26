import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDTO, UserDTO } from 'models';
import { User } from 'server/src/entity/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  
  deleteUser(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get<UserDTO[]>('/api/users/');
  }

  getOne(id: number) {
    return this.http.get<UserDTO>('/api/users/' + id);
  }

  create(user: UserDTO){
    return this.http.post<UserDTO>('/api/users/', user);
  }

  update(user: UserDTO) {
    return this.http.put<UserDTO>('/api/users/', user);
  }

  delete(user: UserDTO) {
    return this.http.put<UserDTO>('/api/users/' , user);
  }

  searchUsers(searchTerm: string): User[] {
    searchTerm = searchTerm.toLowerCase().trim();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.phone.toString().includes(searchTerm) ||
      user.id.toString().includes(searchTerm)
    );
  }
  
}
