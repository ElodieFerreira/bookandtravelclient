import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Option {
  ID: string;
  Libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private http: HttpClient) {
  }


  public getUserInformationById(): Promise<Option> {
    return this.http.get<Option>('http://localhost:8080/option/01').toPromise();
  }
}
