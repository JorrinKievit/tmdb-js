export interface AccountGetFavoriteTVShowsResponse {
  page: number;
  results: AccountGetFavoriteTVShowsResult[];
  total_pages: number;
  total_results: number;
}

export interface AccountGetFavoriteTVShowsResult {
  backdrop_path: null;
  first_air_date: string;
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

export interface AccountGetFavoriteTVShowsParams {
  session_id: string;
  language?: string;
  sort_by?: string;
  page?: number;
}
