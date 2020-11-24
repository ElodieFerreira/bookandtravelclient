import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Routes} from './routes';


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

  register(user: User): Observable<User>  {
    return this.http.post<User>(Routes.user.register, user);
  }

  login(email: string, passwordInput: string): Observable<User> {
    const body = {
      mail: email,
      password: passwordInput,
    };
    return this.http.post<User>(Routes.user.login, body);
  }
}
