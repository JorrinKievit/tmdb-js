export interface AccountGetRatedTVShowsResponse {
  page: number;
  results: AccountGetRatedTVShowsResult[];
  total_pages: number;
  total_results: number;
}

export interface AccountGetRatedTVShowsResult {
  backdrop_path: null | string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: null | string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface AccountGetRatedTVShowsParams {
  language?: string;
  session_id: string;
  sort_by?: string;
  page?: number;
}
