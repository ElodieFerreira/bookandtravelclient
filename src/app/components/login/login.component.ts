import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert/alert.service';
import {first} from 'rxjs/operators';
import {UserApiService} from '../../services/user-api.service';
import {AccountStore} from '../../store/account/account-store.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AccountStore,
    private alertService: AlertService) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.subscription = authenticationService.isLogin$.subscribe(isLogin => {
      if (isLogin) {
        this.router.navigate([this.returnUrl]);
      }
    } );
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.loginForm.controls; }

  onSubmit(): any {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.mail.value, this.f.password.value)
      .pipe()
      .subscribe(
        data => {
          console.log('ola');
          this.router.navigateByUrl('/');
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
