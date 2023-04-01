export interface SearchMoviesResponse {
  page: number;
  results: SearchMoviesResult[];
  total_results: number;
  total_pages: number;
}

export interface SearchMoviesResult {
  poster_path: null | string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface SearchMoviesParams {
  query: string;
  language?: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
  year?: number;
  primary_release_year?: number;
}
