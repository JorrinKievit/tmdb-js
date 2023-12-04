import { PaginatedResponse } from "../PaginatedResults";

export interface SearchKeywordsResponse extends PaginatedResponse<SearchKeywordsResult> {
}

export interface SearchKeywordsResult {
  id: number;
  name: string;
}

export interface SearchKeywordsParams {
  query: string;
  page?: number;
}
