import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginComponent } from './login/login.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: 'login' , component : LoginComponent
 },

   {
      path: ''  , redirectTo : '/login' , pathMatch: 'full'
   },
   {
     path: 'admin-view' , component : AdminViewComponent
   },
   {
     path: 'user-view' , component : UserViewComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
