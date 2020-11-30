import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first, map} from 'rxjs/operators';
import {AccountStore} from '../store/account/account-store.service';
import {AlertService} from '../services/alert/alert.service';
import {ResultsStoreService} from '../store/results/results-store.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Option} from '../services/user-api.service';
import {BannerStoreService} from '../store/banner-store/banner-store.service';

@Component({
  selector: 'app-ajout-bien',
  templateUrl: './ajout-bien.component.html',
  styleUrls: ['./ajout-bien.component.css']
})
export class AjoutBienComponent implements OnInit {
  error$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  form: FormGroup;
  loading = false;
  submitted = false;
  option$: Observable<Option>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resultsStore: ResultsStoreService,
    private alertService: AlertService,
    private bannerStore: BannerStoreService
  ) {
    this.option$ = this.bannerStore.options.pipe(map(option => option));
    // redirect to home if already logged in
  }

  ngOnInit(): void {
    const user_id = JSON.parse(localStorage.getItem('userAOS')).userId;
    this.form = this.formBuilder.group({
      libelle: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(10)]],
      adresse: ['', Validators.required],
      categorie: ['test', Validators.required],
      ville: ['test', Validators.required],
      superficie: ['', [Validators.required, Validators.min(10)]],
      utilisateur_id: [user_id, [Validators.required, Validators.min(10)]],
      cp: ['', [Validators.required, Validators.minLength(5)]],
      url: [''],
      options: [[]],
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
    this.resultsStore.createAHome(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['/']);
        },
        error => {
          this.error$.next(error.error.message);
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
