export interface MatchStatusResponse {
  success: true;
  message: string;
  code: number;
  data: {
    matches: Match;
  };
}

export interface Match {
  league_id: number;
  match_id: number;
  league_name: string;
  team1_name: string;
  team1_logo: string;
  team1_goals: number;
  team2_name: string;
  team2_logo: string;
  team2_goals: number;
  match_status: string;
  elapsed_time: string;
}
