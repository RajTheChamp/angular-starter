import { ThemeLoaderService } from './../../shared/services/theme-loader.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  id: number;
  userDetails: FormGroup;
  formSubmitAttempt: boolean;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private themeLoaderService: ThemeLoaderService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.formSubmitAttempt = false;
    this.userDetails = this.formBuilder.group({
      'id': ['', Validators.required],
    });
  }

  async login() {
    this.formSubmitAttempt = true;
    if (this.userDetails.value.id != null) {
      this.userService.login(this.userDetails.value.id);
      this.router.navigateByUrl(this.router.parseUrl(this.route.snapshot.queryParams.redirectUrl || '/'));
      // const config = this.themeLoaderService.getTheme();
      // console.log(config);
      // this.themeLoaderService.load(config[0].theme);
    }
  }

}
