import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {User, UserInformation} from '../../models/User';
import {UserApiService} from '../../services/user-api.service';


@Injectable({ providedIn: 'root' })
export class AccountStore {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;
  public userInformation: BehaviorSubject<UserInformation>;
  public userInformation$: Observable<UserInformation>;
  private isLogin: BehaviorSubject<boolean>;
  public isLogin$: Observable<boolean>;
  private subscription: Subscription;
  public errorMessage: BehaviorSubject<HttpErrorResponse>;
  public errorMessage$: Observable<HttpErrorResponse>;

  constructor(
    private router: Router,
    private http: HttpClient,
    public userApi: UserApiService
  ) {
    window['test'] = this;
    this.userInformation = new BehaviorSubject<UserInformation>(undefined);
    if (localStorage.getItem('userAOS')) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userAOS')));
      this.user$ = this.userSubject.asObservable();
      this.user$.subscribe(user => {
        if (user) {
          this.subscription = this.userApi.getUserInformationById(user.userId).subscribe(userInformation => {
            console.log()
            this.userInformation.next(userInformation);
          });
        }
      })
      console.log(localStorage.getItem('userAOS'));
      this.isLogin = new BehaviorSubject<boolean>(true);
      this.isLogin$ = this.isLogin.asObservable();
      this.userInformation$ = this.userInformation.asObservable();
    } else {
      this.userSubject = new BehaviorSubject<User>(undefined);
      this.user$ = this.userSubject.asObservable();
      this.isLogin = new BehaviorSubject<boolean>(false);
      this.isLogin$ = this.isLogin.asObservable();
    }
    this.errorMessage = new BehaviorSubject<HttpErrorResponse>(undefined);
    this.errorMessage$ = this.errorMessage.asObservable();
    this.user$.subscribe(userInfo => {
      if(userInfo?.token) {
        this.isLogin.next(true);
        this.userApi.getUserInformationById(userInfo.userId).subscribe(userInformation => this.userInformation.next(userInformation));
      }
    });
  }

  public get userValue(): User {
    return this.userSubject?.value;
  }

  login(username, password): Observable<User>  {
    return this.userApi.login(username, password)
      .pipe(map(user => {
        if (user) {
          return this.successLogin(user);
        }
        // store user details and jwt token in local storage to keep user logged in between page refreshes
      }));
  }

  successLogin(user: User): User {
    console.log('1');
    this.router.navigateByUrl('/').catch(err => console.log(err));
    localStorage.setItem('userAOS', JSON.stringify(user));
    this.userSubject.next(user);
    return user;
  }

  logout(): void  {
    // remove user from local storage and set current user to null
    localStorage.removeItem('userAOS');
    this.userSubject.next(null);
    this.isLogin.next(false);
    this.router.navigateByUrl('/');
  }

  register(user: UserInformation): Observable<User>  {
    return this.userApi.register(user);
    // return this.http.post(Routes.user.register, user).toPromise();
  }

  getAll(): void   {
/*    return this.http.get<User[]>(`${environment.apiUrl}/users`);*/
  }

  getById(id: string): void  {
/*    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);*/
  }

  update(user: UserInformation): Observable<UserInformation>  {
    const userInformationObservable = this.userApi.update(user)
      .pipe(map(userInfo =>  {this.userInformation.next(userInfo); return userInfo; }));
    return userInformationObservable;
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
