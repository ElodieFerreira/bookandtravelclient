import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerStoreService} from '../../../store/banner-store/banner-store.service';
import {Observable} from 'rxjs';
import {Option} from '../../../services/user-api.service';
import {map} from 'rxjs/operators';

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
  constructor(private formBuilder: FormBuilder, private bannerStore: BannerStoreService) {
    this.form = this.formBuilder.group({
      cities: [null, Validators.required],
      options: [''],
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
    console.log(this.form.controls.cities.value);
    this.bannerStore.launchRequest(this.form);
  }

}
