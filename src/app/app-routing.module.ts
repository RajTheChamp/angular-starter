import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  // {
  //   // path: ':brand',
  //   // children: [
  //   //   {
  //       path: '',
  //       redirectTo: '/brand1/dashboard',
  //       pathMatch: 'full'
  //   //   }
  //   // ]
  // }
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
