import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { ClientStoreService } from './client-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  previousUrl = '/';

  constructor(private router: Router, private userService: UsersService, private clientStore: ClientStoreService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.previousUrl = state.url;
    let id = this.clientStore.getItem('userID');
    if (!this.userService.isUserLogged) {
      this.router.navigate(['/login'], {
        queryParams: { redirectUrl: this.previousUrl }
      });
    }
    return this.userService.isUserLogged;
  }

}
