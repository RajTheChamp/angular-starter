import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [TopNavComponent, FormComponent, ListComponent, SideNavComponent, LineChartComponent],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ChartsModule,
    FontAwesomeModule
  ],
  exports: [TopNavComponent, SideNavComponent, LineChartComponent]
})
export class LibraryModule {

}
