import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { ICustomers } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  private apiURL = "https://localhost:44370/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICustomers[]> {
    return this.httpClient.get<ICustomers[]>(this.apiURL + '/customers/')
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
  create(Customers:any): Observable<ICustomers> {

    return this.httpClient.post<ICustomers>(this.apiURL + '/customers/', JSON.stringify(Customers), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(id:any ): Observable<ICustomers> {
    return this.httpClient.get<ICustomers>(this.apiURL + '/customers/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, Customers: any): Observable<ICustomers> {
    return this.httpClient.put<ICustomers>(this.apiURL + '/customers/' + id, JSON.stringify(Customers), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<ICustomers>(this.apiURL + '/customers/' + id, this.httpOptions)
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
