import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Option} from '../../services/user-api.service';
import {OptionApiService} from '../../services/option/option-api.service';
import {BienApiService} from '../../services/bien/bien-api.service';

export interface Filters {
  cities: string[];
  options: string[];
  maxSurface: number;
  minSurface: number;
  minPrice: number;
  maxPrice: number;
  categorie: string;
}
@Injectable({
  providedIn: 'root'
})
export class BannerStoreService {
  options: BehaviorSubject<Option> = new BehaviorSubject<Option>(null);
  constructor(private optionService: OptionApiService, private bienService: BienApiService) {
    this.optionService.getAllOption().then(options => {
      console.log(options);
      this.options.next(options);
    });
  }
}
