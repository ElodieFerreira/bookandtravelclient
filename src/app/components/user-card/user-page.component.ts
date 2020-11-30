import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AccountStore} from '../../store/account/account-store.service';
import {AlertService} from '../../services/alert/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading = false;
  submitted = false;
  public inEdition = false;
  private subscription = Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountStore,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Mail: ['', Validators.required],
      MDP: ['', [Validators.required, Validators.minLength(6)]]
    });
    // @ts-ignore
    this.subscription = this.accountService.userInformation$.subscribe(userInformation => {
      if (userInformation) {
        this.form.controls.Nom.setValue(userInformation.Nom);
        this.form.controls.Prenom.setValue(userInformation.Prenom);
        this.form.controls.Mail.setValue(userInformation.Mail);
        this.form.controls.MDP.setValue(userInformation.MDP);
      }
    });
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.form.controls; }

  onSubmit(): any {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.update(this.form.value).pipe(first()).subscribe(data => {
      this.loading = false;
      this.inEdition = false;
    });
  }

  ngOnDestroy(): void {
  }

}
