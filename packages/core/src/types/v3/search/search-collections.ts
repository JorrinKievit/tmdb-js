export interface SearchCollectionsResponse {
  page: number;
  results: SearchCollectionsResult[];
  total_pages: number;
  total_results: number;
}

export interface SearchCollectionsResult {
  id: number;
  name: string;
  poster_path: null | string;
  backdrop_path: null | string;
}

export interface SearchCollectionsParams {
  query: string;
  page?: number;
  language?: string;
}
