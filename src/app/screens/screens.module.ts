import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './errors/errors.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [DashboardComponent, EmployeeComponent, ErrorComponent,LoginComponent],
  imports: [
     CommonModule,
    ScreensRoutingModule,
    NgxDatatableModule,
     ReactiveFormsModule
  ]
})
export class ScreensModule { }
