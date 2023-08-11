import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Vendor } from './ivendor';
    
@Injectable({
  providedIn: 'root'
})
export class VendorService {
    
  private apiURL = "https://localhost:44370/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Vendor[]> {
    return this.httpClient.get<Vendor[]>(this.apiURL + '/Vendors/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(Vendor): Observable<Vendor> {
    return this.httpClient.post<Vendor>(this.apiURL + '/Vendors/', JSON.stringify(Vendor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id): Observable<Vendor> {
    return this.httpClient.get<Vendor>(this.apiURL + '/Vendors/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id, Vendor): Observable<Vendor> {
    return this.httpClient.put<Vendor>(this.apiURL + '/Vendors/' + id, JSON.stringify(Vendor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id){
    return this.httpClient.delete<Vendor>(this.apiURL + '/Vendors/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}