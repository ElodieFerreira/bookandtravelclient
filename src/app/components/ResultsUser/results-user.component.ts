import { Component, OnInit } from '@angular/core';
import {ResultsStoreService} from '../../store/results/results-store.service';
import {Observable} from 'rxjs';
import {Bien} from '../../services/bien/bien-api.service';
import {first, map} from 'rxjs/operators';

@Component({
  selector: 'app-results-user',
  templateUrl: './results-user.component.html',
  styleUrls: ['./results-user.component.css']
})
export class ResultsUserComponent implements OnInit {
  public biens$: Observable<Bien[]>;
  constructor(private resultsStore: ResultsStoreService) {
    this.biens$ = this.resultsStore.biens$.pipe(map(results => results));
    this.biens$.subscribe(bien => {
      console.log(bien);
    });
  }

  ngOnInit(): void {
  }

  delete(bienId: string, pictureid: string): void {
    if(pictureid) {
      this.resultsStore.deletePicture(pictureid).then(() => {
        this.resultsStore.deleteBien(bienId).pipe(first()).subscribe(() => {
          this.resultsStore.getAllForUser();
        });
      },
        () => {
          this.resultsStore.deleteBien(bienId).pipe(first()).subscribe(() => {
            this.resultsStore.getAllForUser();
          });
        });
    } else {
      this.resultsStore.deleteBien(bienId).pipe(first()).subscribe(() => {
        this.resultsStore.getAllForUser();
      });
    }
  }

}
