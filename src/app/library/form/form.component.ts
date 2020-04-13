import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../shared/store/app.state';
import { Employee } from 'src/app/shared/interfaces/employee';
import * as EmployeeActions from './../../shared/store/actions/employee.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addEmployee(name, id) {
    this.store.dispatch(new EmployeeActions.Add({name: name, id: id}) )
  }

  ngOnInit() {
  }

}
