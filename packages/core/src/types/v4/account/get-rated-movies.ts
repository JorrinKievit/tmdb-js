export interface V4AccountGetRatedMoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: V4AccountGetRatedMoviesResult[];
}

export interface V4AccountGetRatedMoviesResult {
  account_rating: V4AccountGetRatedMoviesAccountRating;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface V4AccountGetRatedMoviesAccountRating {
  value: number;
  created_at: string;
}

export interface V4AccountGetRatedMoviesParams {
  page?: number;
  sort_by?: string;
}
