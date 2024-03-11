export interface GuestSessionsGetRatedMoviesResponse {
  page: number;
  results: GuestSessionsGetRatedMoviesResult[];
  total_pages: number;
  total_results: number;
}

export interface GuestSessionsGetRatedMoviesResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: null | string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface GuestSessionsGetRatedMoviesParams {
  language?: string;
  sort_by?: string;
  page?: number;
}
