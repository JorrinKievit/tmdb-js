import { AppendToResponseType, TVEpisodesAppendToResponse } from "../../append-to-response";

export interface TVEpisodesGetDetailsBaseResponse {
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
  show_id: number;
  runtime: number;
}

export interface TVEpisodesGetDetailsCrew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path: null | string;
  adult: boolean;
  gender: number;
  known_for_department: string;
  original_name: string;
  popularity: number;
}

export interface TVEpisodesGetDetailsGuestStar {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  profile_path: string;
  adult: boolean;
  gender: number;
  known_for_department: string;
  original_name: string;
  popularity: number;
}

export interface TVEpisodesGetDetailsParams<T extends TVEpisodesAppendToResponse[]> {
  language?: string;
  append_to_response?: T;
}

export type TVEpisodesGetDetailsResponse<AppendToResponse extends TVEpisodesAppendToResponse[] | undefined> = TVEpisodesGetDetailsBaseResponse & AppendToResponseType<AppendToResponse>;
