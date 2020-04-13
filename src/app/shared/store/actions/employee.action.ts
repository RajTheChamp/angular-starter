import { Action } from '@ngrx/store'
import { Employee } from '../../interfaces/employee'


export const ADD       = '[Employee] Add'
export const REMOVE    = '[Employee] Remove'


export class Add implements Action {
    readonly type = ADD

    constructor(public payload: Employee) {}
}

export class Remove implements Action {
    readonly type = REMOVE

    constructor(public payload: number) {}
}

export type Actions = Add | Remove