import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './errors/errors.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'tables',
    component:TableComponent,
    canActivate:[AuthGuardService]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
