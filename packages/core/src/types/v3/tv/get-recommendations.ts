export interface TVGetRecommendationsResponse {
  page: number;
  results: TVGetRecommendationsResult[];
  total_pages: number;
  total_results: number;
}

export interface TVGetRecommendationsResult {
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

export interface TVGetRecommendationsParams {
  language?: string;
  page?: number;
}
