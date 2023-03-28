import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  local:any;
  constructor(private users:UsersService, public auth:AuthService){}
  ngOnInit(): void {
    this.local=localStorage;
  }
  Login(username:string,password:string){
    var check = this.users.all_users.find(user => user.username == username && user.password == password);
    if(check!=null){
      this.auth.LogIn();
    }
  }
  Logout(){
    this.auth.LogOut();
  }
}
