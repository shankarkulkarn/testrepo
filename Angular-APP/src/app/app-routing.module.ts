import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path : 'first/:title',
    component : FirstComponent
  },
  {
    path : 'second',
    component : SecondComponent
  },
  {
   path  : 'info/:title',
   component : InfoComponent
  },
  {
    path : '',
    redirectTo : '/first',
    pathMatch : 'full'
  },
  {
    path : '**',
    component : SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
