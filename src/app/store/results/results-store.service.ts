import { Injectable } from '@angular/core';
import {Bien, BienApiService} from '../../services/bien/bien-api.service';
import {Filters} from '../banner-store/banner-store.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {PictureApiService} from '../../services/picture/picture-api.service';
import {Picture} from '../../models/photo';

@Injectable({
  providedIn: 'root'
})
export class ResultsStoreService {
  // @ts-ignore
  private biens: BehaviorSubject<Bien[]> = new BehaviorSubject<Bien[]>()

  public biens$: Observable<Bien[]>;
  constructor(private bienApi: BienApiService,
              private pictureService: PictureApiService) {
    this.biens$ = this.biens.asObservable();
  }


  // @ts-ignore
  launchRequest(form: FormGroup): void {
    const filters = this.createRequest(form);
    this.bienApi.searchBien(filters).pipe(map(house => {
      house.forEach(item =>
        this.pictureService.findById(item.ID).pipe(map(pictures => {return pictures;} )).subscribe(pictures => {
          console.log(pictures);
          item.pictureLink = pictures;
      },
          error => {
          item.pictureLink = [];
          const picture: Picture = {
            Bien_ID: '', ID: '', Lien: undefined
          };
          item.pictureLink.push(picture);
          }));
      return house;
    })).subscribe(biens => this.biens.next(biens),
      error => {this.biens.next([]); });
  }

  private createRequest(form: FormGroup): Filters {
    return {
      cities: form.controls.cities.value,
      options: form.controls.options.value.map(value => value.ID),
      minSurface: form.controls.minSurface.value,
      maxSurface: form.controls.maxSurface.value,
      minPrice: form.controls.minPrice.value,
      maxPrice: form.controls.maxPrice.value,
      categorie : '',
    };
  }

  public createAHome(value: any): Observable<any> {
    return this.bienApi.createBien(value);
  }
}
