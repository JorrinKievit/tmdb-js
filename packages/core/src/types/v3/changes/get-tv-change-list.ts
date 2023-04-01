export interface ChangesGetTVChangeListResponse {
  results: ChangesGetTVChangeListResult[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ChangesGetTVChangeListResult {
  id: number;
  adult: boolean;
}

export interface ChangesGetTVChangeListParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}
