import { CityInput } from './../../model/city.model';
import { ApiService } from './../api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from '../../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private readonly apiService: ApiService) {}

  addCity(data: CityInput): Observable<City> {
    return this.apiService.post<CityInput, City>('city', data);
  }

  getcities(): Observable<City[]> {
    return this.apiService.get<City[]>('city');
  }

  getCity(id: number): Observable<City> {
    return this.apiService.get<City>('city/' + id);
  }

  editCity(data: CityInput): Observable<City> {
    return this.apiService.put<CityInput, City>('city', data);
  }

  deleteCity(id: number): Observable<boolean> {
    return this.apiService.delete<number, boolean>('city', id);
  }
}
