export interface SearchKeywordsResponse {
  page: number;
  results: SearchKeywordsResult[];
  total_pages: number;
  total_results: number;
}

export interface SearchKeywordsResult {
  id: number;
  name: string;
}

export interface SearchKeywordsParams {
  query: string;
  page?: number;
}
