export interface V4AccountGetTVShowRecommendationsResponse {
  page: number;
  results: V4AccountGetTVShowRecommendationsResult[];
  total_results: number;
  total_pages: number;
}

export interface V4AccountGetTVShowRecommendationsResult {
  poster_path: null | string;
  popularity: number;
  id: number;
  backdrop_path: null | string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface V4AccountGetTVShowRecommendationsParams {
  page?: number;
  sort_by?: string;
}
