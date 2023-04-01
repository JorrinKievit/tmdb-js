export interface TVGetDetailsResponse {
  backdrop_path: string;
  created_by: TVGetDetailsCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: TVGetDetailsGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TVGetDetailsLastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: TVGetDetailsNetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TVGetDetailsNetwork[];
  production_countries: TVGetDetailsProductionCountry[];
  seasons: TVGetDetailsSeason[];
  spoken_languages: TVGetDetailsSpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface TVGetDetailsCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface TVGetDetailsGenre {
  id: number;
  name: string;
}

export interface TVGetDetailsLastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TVGetDetailsNetwork {
  name: string;
  id: number;
  logo_path: null | string;
  origin_country: string;
}

export interface TVGetDetailsProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TVGetDetailsSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface TVGetDetailsSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TVGetDetailsParams {
  language?: string;
  append_to_response?: string;
}
