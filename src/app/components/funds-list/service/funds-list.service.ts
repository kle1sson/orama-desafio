import { Injectable } from '@angular/core';

import { Fund } from '../funds.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FundsListService {
  baseUrl =
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';

  constructor(private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.baseUrl);
  }
}
