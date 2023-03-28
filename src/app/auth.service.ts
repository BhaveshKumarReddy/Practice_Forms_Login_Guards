import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string="";
  constructor() { }
  LogIn(){
    this.token = "Ok";
    localStorage.setItem("token",this.token);
  }
  LogOut(){
    this.token = "";
    localStorage.clear();
  }
}
