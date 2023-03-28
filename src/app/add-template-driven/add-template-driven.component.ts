import { Component } from '@angular/core';

@Component({
  selector: 'app-add-template-driven',
  templateUrl: './add-template-driven.component.html',
  styleUrls: ['./add-template-driven.component.css']
})
export class ADDTemplateDrivenComponent {
  Submit(temp_driven:any){
    console.log(temp_driven.value);
  }
}
