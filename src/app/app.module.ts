import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Fakepipe, Namepipe } from './display-users/display-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ADDTemplateDrivenComponent } from './add-template-driven/add-template-driven.component';
import { AddModelDrivenComponent } from './add-model-driven/add-model-driven.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildInputOutputComponent } from './child-input-output/child-input-output.component';
import { EncrypLibModule } from 'encryp-lib';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayUsersComponent,
    AddUserComponent,
    Namepipe,
    Fakepipe,
    ADDTemplateDrivenComponent,
    AddModelDrivenComponent,
    InputOutputComponent,
    ChildInputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EncrypLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
