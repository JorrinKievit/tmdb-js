import {PaginatedResponse} from "../paginated-results";
import {SearchQueryParams} from "./search-base-query-parameters";


export type SearchCollectionsResponse =  PaginatedResponse<SearchCollectionsResult>;

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

export interface SearchCollectionsParams extends SearchQueryParams {
  region?: string;
}

