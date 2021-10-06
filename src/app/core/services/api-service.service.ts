import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private readonly http: HttpClient) {}

  getUploadHeaders() {
    const token: string | null = localStorage.getItem('token') || null;
    return {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
        .set('AcademyId', '1'),
    };
  }

  public get<TResponse>(type: string, params: any): Observable<TResponse> {
    return this.http.get<TResponse>(environment.BASE_URL + type, {
      params: { ...params },
      ...this.getUploadHeaders(),
    });
  }

  public post<TInput, TResponse>(
    type: string,
    data: TInput
  ): Observable<TResponse> {
    if (type === 'File/Upload') {
      return this.http.post<TResponse>(environment.BASE_FILE_URL + type, data, {
        ...this.getUploadHeaders(),
      });
    }
    return this.http.post<TResponse>(environment.BASE_URL + type, data, {
      ...this.getUploadHeaders(),
    });
  }

  public put<TInput, TResponse>(
    type: string,
    data: TInput,
    params?: any
  ): Observable<TResponse> {
    return this.http.put<TResponse>(environment.BASE_URL + type, data, {
      params: { ...params },
      ...this.getUploadHeaders(),
    });
  }

  public delete<TInput, TResponse>(
    type: string,
    id: TInput
  ): Observable<TResponse> {
    return this.http.delete<TResponse>(environment.BASE_URL + type, {
      ...this.getUploadHeaders(),
    });
  }
}
