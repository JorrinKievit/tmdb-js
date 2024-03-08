export interface MoviesGetChangesResponse {
  changes: MoviesGetChangesChange[];
}

export interface MoviesGetChangesChange {
  key: string;
  items: MoviesGetChangesItem[];
}

export interface MoviesGetChangesItem {
  id: string;
  action: string;
  time: string;
  iso_639_1: string;
  value: string;
  original_value: string;
}

export interface MoviesGetChangesParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}
