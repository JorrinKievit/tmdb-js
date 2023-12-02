import PaginatedResponse from "../PaginatedResults"

//export interface SearchCollectionsResponse {
//  page: number;
//  results: SearchCollectionsResult[];
//  total_pages: number;
//  total_results: number;
//}

export interface SearchCollectionsResponse extends PaginatedResponse {
    results: SearchCollectionsResult[];
}

export interface SearchCollectionsResult {
  adult: boolean;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: null | string;
  backdrop_path: null | string;
}

export interface SearchCollectionsParams {
  query: string;
  include_adult?: boolean;
  page?: number;
  language?: string;
  region?: string;
}
