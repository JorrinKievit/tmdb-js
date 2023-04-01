export interface V4ListGetListResponse {
  poster_path: string;
  id: number;
  backdrop_path: string;
  total_results: number;
  public: boolean;
  revenue: string;
  page: number;
  results: V4ListGetListResult[];
  object_ids: V4ListGetListComments;
  iso_639_1: string;
  total_pages: number;
  description: string;
  created_by: V4ListGetListCreatedBy;
  iso_3166_1: string;
  average_rating: number;
  runtime: number;
  name: string;
  comments: V4ListGetListComments;
}

export interface V4ListGetListComments {
  [key: string]: null | string;
}

export interface V4ListGetListCreatedBy {
  gravatar_hash: string;
  name: string;
  username: string;
}

export interface V4ListGetListResult {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface V4ListGetListParams {
  page?: number;
  language?: string;
  sort_by?: string;
}
