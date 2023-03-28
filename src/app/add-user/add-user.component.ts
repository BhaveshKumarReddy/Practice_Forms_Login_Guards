import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:User = {username:'',password:''};
  constructor(private users:UsersService){}
  AddUser(_username:string,_password:string){
    this.user = {
      username: _username,
      password: _password
    };
    this.users.AddUser(this.user);
  }
}
