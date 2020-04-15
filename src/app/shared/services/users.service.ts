import { Injectable } from '@angular/core';
import { ClientStoreService } from './client-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isUserLogged = false;

  constructor(private clientStore: ClientStoreService) { }

  login(id: number) {
    this.clientStore.setItem('userID', id);
    this.isUserLogged = true;
  }

}
