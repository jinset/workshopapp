import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { user } from '../shared/endpoints-routes';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getSpacesAndSpotsByUserId(userData): Observable<any> {
    return this.http.post(`${user}/spaces-spots`, userData);
  }
}
