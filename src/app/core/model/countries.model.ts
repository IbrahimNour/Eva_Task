export interface Country {
  id: number;
  name: string;
  description?: string;
}

export interface CountryInput {
  name: string;
  id?: number;
}

export interface CountryResponse {
  data: Country[];
}
