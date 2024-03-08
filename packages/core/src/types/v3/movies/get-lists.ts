export interface MoviesGetListsResponse {
  id: number;
  page: number;
  results: MoviesGetListsResult[];
  total_pages: number;
  total_results: number;
}

export interface MoviesGetListsResult {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: null | string;
}

export interface MoviesGetListsParams {
  language?: string;
  page?: number;
}
