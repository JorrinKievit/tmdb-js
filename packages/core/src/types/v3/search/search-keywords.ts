import { PaginatedResponse } from "../PaginatedResults";
import {BaseQueryParams} from "./SearchBaseQueryParamters";

export interface SearchKeywordsResponse extends PaginatedResponse<SearchKeywordsResult> {}

export interface SearchKeywordsResult {
  id: number;
  name: string;
}

export interface SearchKeywordsParams extends BaseQueryParams {}

