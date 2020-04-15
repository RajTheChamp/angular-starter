import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './errors/errors.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { LibraryModule } from '../library/library.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [DashboardComponent, EmployeeComponent, ErrorComponent, LoginComponent, TableComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    LibraryModule,
    ProgressbarModule.forRoot()
  ]
})
export class ScreensModule { }
