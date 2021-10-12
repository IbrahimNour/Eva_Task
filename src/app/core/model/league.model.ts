export interface League {}

export interface LeagueStandings {}

export interface LeagueStandigsResponse {
  success: true;
  message: string;
  code: number;
  data: {
    season: number;
    league: {
      name: string;
    };
  };
  standings: [];
}

export interface Standing {
  team_rank: number;
  team_name: string;
  team_logo: string;
  matches_played_count: number;
  win_count: number;
  lose_count: number;
  draw_count: number;
  points: number;
}
