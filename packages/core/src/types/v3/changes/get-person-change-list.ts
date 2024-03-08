export interface ChangesGetPersonChangeListResponse {
  results: ChangesGetPersonChangeListResult[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ChangesGetPersonChangeListResult {
  id: number;
  adult: boolean;
}

export interface ChangesGetPersonChangeListParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}
