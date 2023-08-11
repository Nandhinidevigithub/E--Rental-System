import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Iproduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  private apiUrl ="https://localhost:44370/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(this.apiUrl + '/Products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(Product:any): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(this.apiUrl + '/Products/', JSON.stringify(Product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  
  find(id:any): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(this.apiUrl + '/Products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:any, Product:any): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(this.apiUrl + '/Products/' + id, JSON.stringify(Product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<Iproduct>(this.apiUrl + '/Products/' + id, this.httpOptions)
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
