import { Country } from 'src/app/core/model/countries.model';

export interface City {
  id: number;
  name: string;
  countryId: number;
  country: Country;
}

export interface CityInput {
  name: string;
  countryId: number;
}
