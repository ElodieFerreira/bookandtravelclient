import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/User';
import {UserApiService} from '../services/user-api.service';
import {Option} from '../services/user-api.service';
import {HttpHeaders} from '@angular/common/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  option: BehaviorSubject<Option> = new BehaviorSubject<Option>(null);
  constructor(public userApi: UserApiService) {
  }

  public getUser(): void {
    //this.userApi.getUserInformationById().then(option => this.option.next(option));
  }
}
