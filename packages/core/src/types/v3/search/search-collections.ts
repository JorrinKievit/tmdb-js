import {PaginatedResponse} from "../PaginatedResults";
import {BaseQueryParams, SearchQueryParams} from "./SearchBaseQueryParamters";
// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
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

