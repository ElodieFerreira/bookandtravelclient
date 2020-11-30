import { Component, OnInit } from '@angular/core';
import {ResultsStoreService} from '../../store/results/results-store.service';
import {Observable} from 'rxjs';
import {Bien} from '../../services/bien/bien-api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public biens$: Observable<Bien[]>;
  constructor(private resultsStore: ResultsStoreService) {
    this.biens$ = this.resultsStore.biens$.pipe(map(results => results));
    this.biens$.subscribe(bien => {
      console.log(bien);
    });
  }

  ngOnInit(): void {
  }


}
