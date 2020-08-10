import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
  path : 'view',
  component : ViewproductComponent
},
{
  path : 'add',
  component : AddproductComponent
},
{
  path :'search',
  component : SearchproductComponent
},
{
  path :'update/:pid/:pname/:price',
  component : UpdateproductComponent
},
{
  path : 'login',
  component : LoginComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
