import { Injectable } from '@angular/core';
import {User, UserInformation} from '../models/User';
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


  public getUserInformationById(userId: string): Observable<UserInformation> {
    return this.http.get<UserInformation>(Routes.user.base + userId);
  }

  register(user: UserInformation): Observable<User>  {
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
