export interface KeywordsGetMoviesResponse {
  id: number;
  page: number;
  results: KeywordsGetMoviesResult[];
  total_pages: number;
  total_results: number;
}

export interface KeywordsGetMoviesResult {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface KeywordsGetMoviesParams {
  language?: string;
  page?: number;
  include_adult?: boolean;
}
