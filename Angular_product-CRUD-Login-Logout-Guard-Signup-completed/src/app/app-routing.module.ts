import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{
  path : 'view',
  component : ViewproductComponent,
  canActivate : [AuthGuardService]
},
{
  path : 'add',
  component : AddproductComponent,
  canActivate : [AuthGuardService]
},
{
  path :'search',
  component : SearchproductComponent,
  canActivate : [AuthGuardService]
},
{
  path :'update/:pid/:pname/:price',
  component : UpdateproductComponent,
  canActivate : [AuthGuardService]
},
{
  path : 'login',
  component : LoginComponent
},
{
  path : 'logout',
  component : LogoutComponent
},
{
  path : 'signup',
  component : SignupComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
