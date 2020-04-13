import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ColumnMode, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: any;
  ColumnMode = ColumnMode;
  SortType = SortType;
  data: any;
  isLoaded: boolean;
  modalRef: BsModalRef;
  employeedetails: any;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  modalTitle: string;
  constructor(private dataService: DataService, 
     private modalService: BsModalService, private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    console.log("employee loaded");
    this.isLoaded = false;
    this.get();
    this.isLoaded = true;
  }

  async get() {
    this.data = await this.dataService.get();
    this.employeeList = this.data.data;
    console.log(this.employeeList);
    console.log(this.data);
  }

  openCreateEmployee(template: TemplateRef<any>) {
    this.modalTitle = 'Add Employee';
    this.employeedetails = this.formBuilder.group({
      id: '',
      name: ''
    })
    this.openModal(template);
  }

  addEmployee() {

  }

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }

}
