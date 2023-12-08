export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  total_results: number;
  total_pages: number;
}
