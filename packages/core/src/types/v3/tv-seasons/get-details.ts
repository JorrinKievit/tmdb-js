import { TVSeasonsAppendToResponse } from "../../append-to-response";

export interface TVSeasonsGetDetailsResponse {
  _id: string;
  air_date: string;
  episodes: TVSeasonsGetDetailsEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}

export interface TVSeasonsGetDetailsEpisode {
  air_date: string;
  episode_number: number;
  crew: TVSeasonsGetDetailsCrew[];
  guest_stars: TVSeasonsGetDetailsCrew[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TVSeasonsGetDetailsCrew {
  department?: string;
  job?: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  order?: number;
  character?: string;
}

export interface TVSeasonsGetDetailsParams<T extends TVSeasonsAppendToResponse[]> {
  language?: string;
  append_to_response?: T;
}
