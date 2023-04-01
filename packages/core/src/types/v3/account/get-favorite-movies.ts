export interface AccountGetFavoriteMoviesResponse {
  page: number;
  results: AccountGetFavoriteMoviesResult[];
  total_pages: number;
  total_results: number;
}

export interface AccountGetFavoriteMoviesResult {
  adult: boolean;
  backdrop_path: null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: Date;
  poster_path: null;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface AccountGetFavoriteMoviesParams {
  session_id: string;
  language?: string;
  sort_by?: string;
  page?: number;
}
