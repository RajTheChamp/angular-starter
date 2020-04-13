import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id: number;
  userDetails: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userDetails = this.formBuilder.group({
      'id': ['', Validators.required],
    })
  }

  async login() {
    if (this.userDetails.value.id != null) {
      this.userService.login(this.userDetails.value.id);
      this.router.navigateByUrl(this.router.parseUrl(this.route.snapshot.queryParams.redirectUrl||'/'))
    }
  }

}
