export interface FindFindByIdResponse {
  movie_results: FindFindByIdMovieResult[];
  person_results: FindFindByIdPersonResult[];
  tv_results: FindFindByIdTvResult[];
  tv_episode_results: FindFindByIdTvEpisodeResult[];
  tv_season_results: FindFindByIdTvSeasonResult[];
}

export interface FindFindByIdMovieResult {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface FindFindByIdPersonResult {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for:
    | FindFindByIdPersonResultKnownForMovie[]
    | FindFindByIdPersonResultKnownForTV[];
  name: string;
  popularity: number;
}

export interface FindFindByIdPersonResultKnownForMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface FindFindByIdPersonResultKnownForTV {
  poster_path: string;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface FindFindByIdTvResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export type FindFindByIdTvEpisodeResult = unknown;

export type FindFindByIdTvSeasonResult = unknown;

export interface FindFindByIdParams {
  language?: string;
  external_source: string;
}
