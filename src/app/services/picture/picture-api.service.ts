import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Picture} from '../../models/photo';
import {Observable} from 'rxjs';
import {Routes} from '../routes';

@Injectable({
  providedIn: 'root'
})
export class PictureApiService {

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Picture[]> {
    return this.http.get<Picture[]>(Routes.picture.base + id);
  }
}
