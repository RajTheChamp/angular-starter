import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from './../../shared/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employeeList: any;
  ColumnMode = ColumnMode;
  SortType = SortType;
  data: any;
  isLoaded: boolean;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getData();
    this.isLoaded = true;
  }

  async getData() {
    this.data = await this.dataService.get();
    this.employeeList = this.data.data;
  }

}
