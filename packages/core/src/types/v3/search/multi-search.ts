import { PaginatedResponse } from "../paginated-response";

export type SearchMultiSearchResponse = PaginatedResponse<SearchMultiSearchResult>;

export interface SearchMultiSearchResult {
  poster_path?: null | string;
  popularity: number;
  id: number;
  overview?: string;
  backdrop_path?: null | string;
  vote_average?: number;
  media_type: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
  adult?: boolean;
  release_date?: string;
  original_title?: string;
  title?: string;
  video?: boolean;
  profile_path?: null | string;
  known_for?: SearchMultiSearchResult[];
}

export interface SearchMultiSearchParams {
  query: string;
  language?: string;
  page?: number;
  include_adult?: boolean;
}
