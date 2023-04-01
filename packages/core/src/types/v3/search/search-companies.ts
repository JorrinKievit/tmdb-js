export interface SearchCompaniesResponse {
  page: number;
  results: SearchCompaniesResult[];
  total_pages: number;
  total_results: number;
}

export interface SearchCompaniesResult {
  id: number;
  logo_path: null | string;
  name: string;
}

export interface SearchCompaniesParams {
  query: string;
  page?: number;
}
