import { CountryInput } from './../../model/countries.model';
import { Observable } from 'rxjs';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Country, CountryResponse } from '../../model/countries.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly apiService: ApiService) {}

  addCountry(data: CountryInput): Observable<Country> {
    return this.apiService.post<CountryInput, Country>('country', data);
  }

  getCountries(): Observable<CountryResponse> {
    return this.apiService.get<CountryResponse>('country');
  }

  getCountry(id: number): Observable<Country> {
    return this.apiService.get<Country>('country/' + id);
  }

  deleteCountry(id: number): Observable<boolean> {
    return this.apiService.delete<number, boolean>('country', id);
  }

  editCountry(data: CountryInput): Observable<Country> {
    return this.apiService.put<CountryInput, Country>('country', data);
  }
}
