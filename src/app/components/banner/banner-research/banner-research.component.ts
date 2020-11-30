import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerStoreService} from '../../../store/banner-store/banner-store.service';
import {Observable} from 'rxjs';
import {Option} from '../../../services/user-api.service';
import {map} from 'rxjs/operators';
import {ResultsComponent} from '../../results/results.component';
import {ResultsStoreService} from '../../../store/results/results-store.service';
import {ReservationStoreService} from '../../../store/reservation/reservation-store.service';

@Component({
  selector: 'app-banner-research',
  templateUrl: './banner-research.component.html',
  styleUrls: ['./banner-research.component.css']
})
export class BannerResearchComponent implements OnInit {
  form: FormGroup;
  cities = [
    {id: 1, name: 'Evry'},
    {id: 2, name: 'Paris'},
    {id: 3, name: 'Versailles'},
    {id: 4, name: undefined},
  ];
  option$: Observable<Option>;
  constructor(private formBuilder: FormBuilder, private bannerStore: BannerStoreService,
              private resultsStore: ResultsStoreService,
              private reservationStore: ReservationStoreService) {
    this.option$ = this.bannerStore.options.pipe(map(option => option));

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cities: [[], Validators.required],
      options: [[]],
      minSurface: [''],
      maxSurface: [''],
      minPrice: [''],
      maxPrice: [''],
      start_date: [''],
      end_date: [''],
    });
    this.form.controls.start_date.valueChanges.subscribe(value => {
      console.log("et oui");
      this.reservationStore.start_date = value;
    });

    this.form.controls.end_date.valueChanges.subscribe(value => {
      console.log("et oui");
      this.reservationStore.end_date = value;
    });
  }

  onSubmit(): void {
    console.log(this.form.controls.maxSurface.value);
    this.resultsStore.launchRequest(this.form);
  }
}
