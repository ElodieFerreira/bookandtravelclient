import { Injectable } from '@angular/core';
import {User, UserInformation} from '../models/User';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
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
      Mail: email,
      MDP: passwordInput,
    };
    return this.http.post<User>(Routes.user.login, body);
  }

  update(user: UserInformation): Observable<UserInformation> {
    const header = this.prepareHeader();
    const userLocal: User = JSON.parse(localStorage.getItem('userAOS'));
    const id = userLocal.userId.toString();
    return this.http.put<UserInformation>(Routes.user.base + id, user);
  }

  prepareHeader(): any {
    const user: User = JSON.parse(localStorage.getItem('userAOS'));
    console.log(user);
    const header = new HttpHeaders({ 'Content-Type': 'application/json'})
    header.set('Authorization', user.token);
    return header;
  }

}
