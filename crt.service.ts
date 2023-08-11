import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { ICarts } from './icart';

@Injectable({
  providedIn: 'root'
})
export class CrtService {
  private apiURL = "https://localhost:44370/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICarts[]> {
    return this.httpClient.get<ICarts[]>(this.apiURL + '/carts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  // create(Customers: any): Observable<ICustomers> {
    
  //   console.log("Customers.customervalue in service");
  //   console.log(Customers);

  //   return this.httpClient.post<ICustomers>(this.apiURL + '/customers/', JSON.stringify(Customers), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }  
  create(Carts:any): Observable<ICarts> {

    return this.httpClient.post<ICarts>(this.apiURL + '/carts/', JSON.stringify(Carts), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(id:any ): Observable<ICarts> {
    return this.httpClient.get<ICarts>(this.apiURL + '/carts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, Carts: any): Observable<ICarts> {
    return this.httpClient.put<ICarts>(this.apiURL + '/carts/' + id, JSON.stringify(Carts), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<ICarts>(this.apiURL + '/carts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
