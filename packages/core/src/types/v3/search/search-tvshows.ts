import { PaginatedResponse } from "../PaginatedResults";

export interface SearchTVShowsResponse extends PaginatedResponse {
  results: SearchTVShowsResult[];
}

export interface SearchTVShowsResult {
  adult: boolean;
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
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

export interface SearchTVShowsParams {
  query: string;
  language?: string;
  page?: number;
  include_adult?: boolean;
  first_air_date_year?: number;
  year?: string;
}
