export interface AccountGetRatedTVEpisodesResponse {
  page: number;
  results: AccountGetRatedTVEpisodesResult[];
  total_pages: number;
  total_results: number;
}

export interface AccountGetRatedTVEpisodesResult {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: null | string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface AccountGetRatedTVEpisodesParams {
  language?: string;
  session_id: string;
  sort_by?: string;
  page?: number;
}
