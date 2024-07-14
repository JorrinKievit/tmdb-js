export interface PeopleGetPopularResponse {
  page: number;
  results: PeopleGetPopularResult[];
  total_results: number;
  total_pages: number;
}

export interface PeopleGetPopularResult {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: PeopleGetPopularKnownFor[];
  name: string;
  popularity: number;
}

export interface PeopleGetPopularKnownFor {
  poster_path: string;
  adult?: boolean;
  overview: string;
  release_date?: string;
  original_title?: string;
  genre_ids: number[];
  id: number;
  media_type: "movie" | "tv";
  original_language: string;
  title?: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video?: boolean;
  vote_average: number;
  first_air_date?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
}

export interface PeopleGetPopularParams {
  language?: string;
  page?: number;
}
