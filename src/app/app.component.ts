import { Component } from '@angular/core';
import { EncrypLibComponent } from 'encryp-lib';
import { EncrypLibService } from 'projects/encryp-lib/src/public-api';
import { window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private encryp_Lib:EncrypLibService){}
  message:string = "Bhavesh";
  encrypted_message:string = this.encryp_Lib.encode(this.message,2);
  decrypted_message:string = this.encryp_Lib.decode(this.message,2);
  x:EncrypLibComponent = new EncrypLibComponent();
  title = 'Practice_Form_Login_Guard';
  local:any;
  logout():void{
    location.reload();
    localStorage.clear();
  }
  ngOnInit():void{
    this.local = localStorage;
  }
}
