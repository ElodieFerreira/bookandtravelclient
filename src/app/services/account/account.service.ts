import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../../models/User';
import {UserApiService} from '../user-api.service';


@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private userApi: UserApiService
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password): any  {
    return this.userApi.login(username, password)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log('')
        localStorage.setItem('userAOS', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout(): void  {
    /*// remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);*/
  }

  register(user: User): Observable<User>  {
    return this.userApi.register(user);
    // return this.http.post(Routes.user.register, user).toPromise();
  }

  getAll(): void   {
/*    return this.http.get<User[]>(`${environment.apiUrl}/users`);*/
  }

  getById(id: string): void  {
/*    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);*/
  }

  update(id, params): void  {
/*    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));*/
  }

  delete(id: string): void {
/*    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));*/
  }
}
