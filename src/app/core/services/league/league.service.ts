import { LeagueStandigsResponse } from './../../model/league.model';
import { Observable } from 'rxjs';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { League } from '../../criatria/league/league.criatria';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private readonly apiService: ApiService) {}

  getStandings(criatria: League): Observable<LeagueStandigsResponse> {
    return this.apiService.get<LeagueStandigsResponse>(
      'get_standings_for_league',
      criatria
    );
  }
}
