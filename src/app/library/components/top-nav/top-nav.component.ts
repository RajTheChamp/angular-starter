import { ThemeLoaderService } from './../../../shared/services/theme-loader.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { ClientStoreService } from 'src/app/shared/services/client-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public userService: UsersService, private clientService: ClientStoreService, private router: Router,
              public themeService: ThemeLoaderService) { }

  ngOnInit() {
  }

  logout() {
    this.clientService.removeItem('userID');
    this.router.navigate(['/dashboard']);
  }

}
