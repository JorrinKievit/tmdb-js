import {PaginatedResponse} from "../PaginatedResults";
import {BaseQueryParams, SearchQueryParams} from "./SearchBaseQueryParamters";

export interface SearchCollectionsResponse extends PaginatedResponse<SearchCollectionsResult> {}

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

