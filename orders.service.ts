import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Iorders } from './iorders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiURL = "https://localhost:44370/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Iorders[]> {
    return this.httpClient.get<Iorders[]>(this.apiURL + '/orders/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(Orders: any): Observable<Iorders> {
    
    console.log("Orders.ordervalue in service");
    console.log(Orders);

    return this.httpClient.post<Iorders>(this.apiURL + '/orders/', JSON.stringify(Orders), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Iorders> {
    return this.httpClient.get<Iorders>(this.apiURL + '/orders/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, Orders: any): Observable<Iorders> {
    return this.httpClient.put<Iorders>(this.apiURL + '/orders/' + id, JSON.stringify(Orders), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Iorders>(this.apiURL + '/orders/' + id, this.httpOptions)
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
