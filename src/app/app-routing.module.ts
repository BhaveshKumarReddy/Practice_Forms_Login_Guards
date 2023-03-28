import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModelDrivenComponent } from './add-model-driven/add-model-driven.component';
import { ADDTemplateDrivenComponent } from './add-template-driven/add-template-driven.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'display',component:DisplayUsersComponent,canActivate:[AuthGuard]},
  {path:'add',component:AddUserComponent,canActivate:[AuthGuard]},
  {path:'add_Model_driven',component: AddModelDrivenComponent},
  {path:'add_Template_driven',component:ADDTemplateDrivenComponent},
  {path:'InputOutput',component:InputOutputComponent, 
   children: [
    //{ path: 'detail/:id', component: ProductDetailComponent }
    //{ path: 'detail/:id', component: ProductDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
