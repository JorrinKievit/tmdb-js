export interface GuestSessionsGetRatedTVEpisodesResponse {
  page: number;
  results: GuestSessionsGetRatedTVEpisodesResult[];
  total_pages: number;
  total_results: number;
}

export interface GuestSessionsGetRatedTVEpisodesResult {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: null | string;
  season_number: number;
  show_id: number;
  still_path: null | string;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface GuestSessionsGetRatedTVEpisodesParams {
  language?: string;
  sort_by?: string;
  page?: number;
}
