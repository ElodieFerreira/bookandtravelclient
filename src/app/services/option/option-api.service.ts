import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Option} from '../user-api.service';

@Injectable({
  providedIn: 'root'
})
export class OptionApiService {

  constructor(private http: HttpClient) {
  }

  public getAllOption(): Promise<Option> {
    return this.http.get<Option>('http://localhost:8080/option/').toPromise();
  }
}
