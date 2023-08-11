import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ibooking } from './ibooking'; 

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiURL = "https://localhost:44370/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Ibooking[]> {
    return this.httpClient.get<Ibooking[]>(this.apiURL + '/bookings/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(booking:any): Observable<Ibooking> {
    return this.httpClient.post<Ibooking>(this.apiURL + '/bookings/', JSON.stringify(booking), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<Ibooking> {
    return this.httpClient.get<Ibooking>(this.apiURL + '/bookings/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, booking:any): Observable<Ibooking> {
    return this.httpClient.put<Ibooking>(this.apiURL + '/bookings/' + id, JSON.stringify(booking), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<Ibooking>(this.apiURL + '/bookings/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
