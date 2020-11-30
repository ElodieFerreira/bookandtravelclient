import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Option} from '../user-api.service';
import {Routes} from '../routes';
import {Filters} from '../../store/banner-store/banner-store.service';
import {Observable} from 'rxjs';
import {Picture} from '../../models/photo';

export interface Bien {
  ID: string;
  Libelle: string;
  Prix: number;
  Adresse: string;
  CP: number;
  Ville: string;
  Superficie: number;
  Utilisateur_ID: number;
  pictureLink: Picture[];
}
@Injectable({
  providedIn: 'root'
})
export class BienApiService {

  constructor(private http: HttpClient) {
  }

  public searchBien(filters: Filters): Observable<Bien[]> {
    return this.http.post<Bien[]>(Routes.bien.search, filters);
  }

  public createBien(bien: Bien): Observable<any> {
    return this.http.post<any>(Routes.bien.base , bien);
  }

  public getAllForUser(userId: string): Observable<any> {
    return this.http.get(Routes.bien.allUser + userId);
  }

  public deleteBien(id: string): Observable<any> {
    return this.http.delete<any>(Routes.bien.base + id);
  }

  public deletePhoto(id: string): Observable<any> {
    return this.http.delete<any>(Routes.picture.base + id);
  }
}
