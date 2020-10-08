import { Component, OnInit } from '@angular/core';
import {UserStoreService} from '../../store/user-store.service';
import {Option} from '../../services/user-api.service';
import {map, share} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  optionData: Observable<Option>;
  constructor(public userStore: UserStoreService) {
    this.optionData = this.userStore.option.pipe(map(option => option));
  }

  ngOnInit(): void {
  }
  search() {
    this.userStore.getUser();

  }
  test(): void {
    console.log('caca');
  }
}
