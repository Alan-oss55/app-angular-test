import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Welcome } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url ='https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Welcome[]>{
    return this.http.get<Welcome[]>(this.url);
  }

  getProductById(productId: number): Observable<Welcome> {
    const apiUrl = `${this.url}/${productId}`; // Append productId to the URL
    return this.http.get<Welcome>(apiUrl);
  }
}
