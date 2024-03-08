export interface DiscoverTVDiscoverResponse {
  page: number;
  results: DiscoverTVDiscoverResult[];
  total_results: number;
  total_pages: number;
}

export interface DiscoverTVDiscoverResult {
  poster_path: string;
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

export interface DiscoverTVDiscoverParams {
  language?: string;
  sort_by?: string;
  ["air_date.gte"]?: string;
  ["air_date.lte"]?: string;
  ["first_air_date.gte"]?: string;
  ["first_air_date.lte"]?: string;
  first_air_date_year?: number;
  page?: number;
  timezone?: string;
  ["vote_average.gte"]?: number;
  ["vote_count.gte"]?: number;
  with_genres?: string;
  with_networks?: string;
  without_genres?: string;
  with_runtime?: string;
  ["with_runtime.gte"]?: number;
  ["with_runtime.lte"]?: number;
  include_null_first_air_dates?: boolean;
  with_original_language?: string;
  without_keywords?: string;
  screened_theatrically?: boolean;
  with_companies?: string;
  with_keywords?: string;
  with_watch_providers?: string;
  watch_region?: string;
  with_watch_monetization_types?: string;
  with_status?: string;
  with_type?: string;
  without_companies?: string;
}
