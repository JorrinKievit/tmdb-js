export interface TVGetSimilarTVShowsResponse {
  page: number;
  results: TVGetSimilarTVShowsResult[];
  total_pages: number;
  total_results: number;
}

export interface TVGetSimilarTVShowsResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface TVGetSimilarTVShowsParams {
  language?: string;
  page?: number;
}
