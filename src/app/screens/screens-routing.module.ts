import { FormsComponent } from './forms/forms.component';
import { TranslateComponent } from './translate/translate.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tables',
    component: TableComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'translate',
    component: TranslateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'forms',
    component: FormsComponent,
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
