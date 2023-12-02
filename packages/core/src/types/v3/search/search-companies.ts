import { PaginatedResponse } from '../PaginatedResults';
export interface SearchCompaniesResponse extends PaginatedResponse {
  results: SearchCompaniesResult[];
}

export interface SearchCompaniesResult {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface SearchCompaniesParams {
  query: string;
  page?: number;
}
