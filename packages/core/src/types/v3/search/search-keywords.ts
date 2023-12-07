import { PaginatedResponse } from "../paginated-results";
import {BaseQueryParams} from "./search-base-query-parameters";




export type SearchKeywordsResponse = PaginatedResponse<SearchKeywordsResult>;

export interface SearchKeywordsResult {
  id: number;
  name: string;
}

export type SearchKeywordsParams = BaseQueryParams;

