import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

    signUp(data:any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/user`, data).pipe(
        map(response => {
          console.log(response,"signuppp")
          return response;
        }),
        catchError(error => {
          console.log(error,"errorrr")
          return of(error);
        })
      );
    }

    login(data:any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/user`, data).pipe(
        map(response => {
       console.log(response,"loginn")
          return response;
        }),
        catchError(error => {
          console.log(error,"errorrr")
          return of(error);
        })
      );
    }

}
