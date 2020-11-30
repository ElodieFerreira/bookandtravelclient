import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationStoreService {
  public start_date: Date;
  public end_date: Date;

  constructor() { }
}
