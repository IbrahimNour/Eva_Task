import { Observable } from 'rxjs';
import {
  LoginResponse,
  LoginInput,
  RegisterInput,
  RegisterResponse,
  VerficationInput,
  VerficationResponse,
} from './../../model/auth.model';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly apiService: ApiService) {}

  login(data: LoginInput): Observable<LoginResponse> {
    return this.apiService.post<LoginInput, LoginResponse>('/login', data);
  }

  register(data: RegisterInput): Observable<RegisterResponse> {
    return this.apiService.post<RegisterInput, RegisterResponse>(
      '/register',
      data
    );
  }

  verfication(data: VerficationInput): Observable<VerficationResponse> {
    return this.apiService.post<VerficationInput, VerficationResponse>(
      '/verfy',
      data
    );
  }
}
