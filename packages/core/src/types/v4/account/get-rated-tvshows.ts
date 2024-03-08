export interface V4AccountGetRatedTVShowsResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: V4AccountGetRatedTVShowsResult[];
}

export interface V4AccountGetRatedTVShowsResult {
  original_name: string;
  genre_ids: number[];
  account_rating: V4AccountGetRatedTVShowsAccountRating;
  name: string;
  popularity: number;
  origin_country: string[];
  vote_count: number;
  first_air_date: string;
  backdrop_path: string;
  original_language: string;
  id: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}

export interface V4AccountGetRatedTVShowsAccountRating {
  value: number;
  created_at: string;
}

export interface V4AccountGetRatedTVShowsParams {
  page?: number;
  sort_by?: string;
}
