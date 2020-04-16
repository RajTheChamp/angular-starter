import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { l10nConfig } from './../l10n-config';
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
import { TranslateComponent } from './translate/translate.component';
import { L10nLoader, LocalizationModule } from 'angular-l10n';



@NgModule({
  declarations: [DashboardComponent, EmployeeComponent, ErrorComponent, LoginComponent, TableComponent, TranslateComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    LibraryModule,
    ProgressbarModule.forRoot(),
    LocalizationModule.forRoot(l10nConfig),
    BsDropdownModule.forRoot()
  ]
})
export class ScreensModule {
  constructor(public l10Loader: L10nLoader) {
    this.l10Loader.load();
  }
 }
