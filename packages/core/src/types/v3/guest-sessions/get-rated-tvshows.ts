export interface GuestSessionsGetRatedTVShowsResponse {
  page: number;
  results: GuestSessionsGetRatedTVShowsResult[];
  total_pages: number;
  total_results: number;
}

export interface GuestSessionsGetRatedTVShowsResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: null;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface GuestSessionsGetRatedTVShowsParams {
  language?: string;
  sort_by?: string;
  page?: number;
}
