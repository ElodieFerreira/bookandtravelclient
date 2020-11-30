import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerStoreService} from '../../../store/banner-store/banner-store.service';
import {Observable} from 'rxjs';
import {Option} from '../../../services/user-api.service';
import {map} from 'rxjs/operators';
import {ResultsComponent} from '../../results/results.component';
import {ResultsStoreService} from '../../../store/results/results-store.service';

@Component({
  selector: 'app-banner-research',
  templateUrl: './banner-research.component.html',
  styleUrls: ['./banner-research.component.css']
})
export class BannerResearchComponent implements OnInit {
  form: FormGroup;
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];
  option$: Observable<Option>;
  constructor(private formBuilder: FormBuilder, private bannerStore: BannerStoreService,
              private resultsStore: ResultsStoreService) {
    this.form = this.formBuilder.group({
      cities: [[], Validators.required],
      options: [[]],
      minSurface: [''],
      maxSurface: [''],
      minPrice: [''],
      maxPrice: [''],
    });
    this.option$ = this.bannerStore.options.pipe(map(option => option));

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('1554');
    console.log(this.form.controls.maxSurface.value);
    this.resultsStore.launchRequest(this.form);
  }

}
