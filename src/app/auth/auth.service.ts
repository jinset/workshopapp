import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthInterface, UserInterface } from '../interfaces/interfaces';
import { auth } from '../shared/endpoints-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser() {
    let userData;
    return userData = JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: UserInterface): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  cleanUser(): void {
    localStorage.removeItem('user');
  }

  login(user: AuthInterface): Observable<UserInterface> {
    return this.http
      .post<any>(`${auth}/login`, user)
      .pipe(
        catchError((error: Response): Observable<Response> => throwError(error))
      );
  }

  forgotPassword(email: string): any {
    return this.http
      .post<any>(`${auth}/forgot-password`, email)
      .pipe(
        catchError((error: Response): Observable<Response> => throwError(error))
      );
  }

  changePassword(user: AuthInterface): any {
    return this.http
      .post<any>(`${auth}/change`, user)
      .pipe(
        catchError((error: Response): Observable<Response> => throwError(error))
      );
  }
}
