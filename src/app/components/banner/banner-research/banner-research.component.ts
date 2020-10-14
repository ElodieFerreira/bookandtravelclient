import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cities: ['', Validators.required],
      options: [''],
      minSurface: [''],
      maxSurface: [''],
      minPrice: [''],
      maxPrice: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("finish");

  }

}
