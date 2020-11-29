import { Component, OnInit } from '@angular/core';
import {AccountStore} from '../../store/account/account-store.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public isLogin$: Observable<boolean>;

  constructor(private accountStore: AccountStore) {
    this.isLogin$ = this.accountStore.isLogin$.pipe(map(isLogin => isLogin));
  }

  ngOnInit(): void {
  }

  logout(): void {
    console.log('ta mere');
    this.accountStore.logout();
  }
}
