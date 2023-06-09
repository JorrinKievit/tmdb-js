export interface SearchPeopleResponse {
  page: number;
  results: SearchPeopleResult[];
  total_results: number;
  total_pages: number;
}

export interface SearchPeopleResult {
  profile_path: null | string;
  adult: boolean;
  id: number;
  known_for: SearchPeopleKnownFor[];
  name: string;
  popularity: number;
}

export interface SearchPeopleKnownFor {
  poster_path: string;
  adult?: boolean;
  overview: string;
  release_date?: string;
  original_title?: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title?: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video?: boolean;
  vote_average: number;
  first_air_date?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
}

export interface SearchPeopleParams {
  query: string;
  language?: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
}
