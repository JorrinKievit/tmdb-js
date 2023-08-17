import { TVEpisodesAppendToResponse } from "../../append-to-response";

export interface TVEpisodesGetDetailsResponse {
  air_date: string;
  crew: TVEpisodesGetDetailsCrew[];
  episode_number: number;
  guest_stars: TVEpisodesGetDetailsGuestStar[];
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TVEpisodesGetDetailsCrew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path: null | string;
}

export interface TVEpisodesGetDetailsGuestStar {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  profile_path: string;
}

export interface TVEpisodesGetDetailsParams<T extends TVEpisodesAppendToResponse[]> {
  language?: string;
  append_to_response?: T;
}
