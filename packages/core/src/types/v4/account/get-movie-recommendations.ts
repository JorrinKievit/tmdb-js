export interface V4AccountGetMovieRecommendationsResponse {
  page: number;
  results: V4AccountGetMovieRecommendationsResult[];
  total_results: number;
  total_pages: number;
}

export interface V4AccountGetMovieRecommendationsResult {
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

export interface V4AccountGetMovieRecommendationsParams {
  page?: number;
  sort_by?: string;
}
