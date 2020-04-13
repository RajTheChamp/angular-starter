import { Action } from '@ngrx/store'
import { Employee } from '../../interfaces/employee'
import * as EmployeeActions from './../actions/employee.action'


export function reducer(state: Employee[] = [], action: EmployeeActions.Actions) {

    switch (action.type) {
        case EmployeeActions.ADD:
            return [...state, action.payload];

        case EmployeeActions.REMOVE:
            // state.splice(action.payload, 1)
            state = state.filter(item => !(item.id == action.payload));
            return state;

        default:
            return state;
    }
}