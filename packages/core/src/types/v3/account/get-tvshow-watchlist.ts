export interface AccountGetTVShowWatchlistResponse {
  page: number;
  results: AccountGetTVShowWatchlistResult[];
  total_pages: number;
  total_results: number;
}

export interface AccountGetTVShowWatchlistResult {
  backdrop_path: null;
  first_air_date: Date;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: null;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface AccountGetTVShowWatchlistParams {
  language?: string;
  session_id: string;
  sort_by?: string;
  page?: number;
}
