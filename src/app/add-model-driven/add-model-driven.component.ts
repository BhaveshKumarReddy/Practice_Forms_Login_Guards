import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Users } from 'src/Models/Users';

@Component({
  selector: 'app-add-model-driven',
  templateUrl: './add-model-driven.component.html',
  styleUrls: ['./add-model-driven.component.css']
})
export class AddModelDrivenComponent {

  title = 'mdf';
  defval:string="";

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(3)])
  })
 
  get firstname() {
    console.log(this.contactForm.controls['firstname']);
    return this.contactForm.get('firstname');
 } 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }

  }