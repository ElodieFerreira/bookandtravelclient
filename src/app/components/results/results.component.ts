import {Component, OnInit} from '@angular/core';
import {ResultsStoreService} from '../../store/results/results-store.service';
import {Observable} from 'rxjs';
import {Bien} from '../../services/bien/bien-api.service';
import {first, map} from 'rxjs/operators';
import {ReservationStoreService} from '../../store/reservation/reservation-store.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Routes} from '../../services/routes';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public biens$: Observable<Bien[]>;
  public reservable: boolean;

  constructor(private resultsStore: ResultsStoreService,
              private reservationStoreServive: ReservationStoreService,
              private httpClientModule: HttpClient,
              private router: Router) {
    this.biens$ = this.resultsStore.biens$.pipe(map(results => results));
    this.biens$.subscribe(bien => {
      console.log(bien);
    });
    if (this.reservationStoreServive.start_date && this.reservationStoreServive.end_date) {
      this.reservable = true;
    }
  }

  ngOnInit(): void {
  }

  reserve(bien: Bien): void {
    const id_user = JSON.parse(localStorage.getItem('userAOS')).userId;
    const body = {
      date_f: this.reservationStoreServive.end_date,
      date_d: this.reservationStoreServive.start_date,
      total: bien.Prix,
      bien_id: bien.ID,
      loueur_id: bien.Utilisateur_ID,
      locataire_id: id_user,
    };
    this.httpClientModule.post(Routes.reservation.base, body).pipe(first())
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }


}
