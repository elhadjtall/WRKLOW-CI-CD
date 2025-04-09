import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment'; 
import { Car } from './models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl + '/cars');
  }
}
