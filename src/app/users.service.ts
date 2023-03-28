import { Injectable } from '@angular/core';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  all_users:User[];
  constructor() {
    this.all_users = [
      {username:"bhavesh", password:"123456"},
      {username:"pavith", password:"12345"},
      {username:"avinash", password:"1234"}
    ]
   }
   AddUser(user:User){
    this.all_users.push(user);
   }
}
