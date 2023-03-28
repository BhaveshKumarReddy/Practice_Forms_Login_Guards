import { Component } from '@angular/core';
import { User } from 'src/Models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent {
  all_users:User[];
  inpPipe:string='';
  constructor(public users: UsersService){
    this.all_users = users.all_users;
  }
}
