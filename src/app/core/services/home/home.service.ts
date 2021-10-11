import { MatchStatusResponse } from './../../model/home.model';
import { Observable } from 'rxjs';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { MatchStatus } from '../../criatria/home/home.criatria';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly apiService: ApiService) {}

  getMatches(criatria: MatchStatus): Observable<MatchStatusResponse> {
    return this.apiService.get<MatchStatusResponse>(
      'today_matches_for_user',
      criatria
    );
  }
}
