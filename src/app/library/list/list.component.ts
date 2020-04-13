import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../shared/store/app.state';
import { Employee } from 'src/app/shared/interfaces/employee';
import * as EmployeeActions from './../../shared/store/actions/employee.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { 
    this.employees = store.select('employee');
  }

  deleteEmployee(id) {
    this.store.dispatch(new EmployeeActions.Remove(id) )
  }

  ngOnInit() {
  }

}
