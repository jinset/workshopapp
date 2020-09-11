import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { reservation } from '../shared/endpoints-routes';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) {}

  getReservations(userUuid: string): Observable<any> {
    const params = new HttpParams()
      .set('userUuid', userUuid)
      .set('offset', '0')
      .set('limit', '10');
    return this.http.get<any>(`${reservation}/user`, { params });
  }
}
