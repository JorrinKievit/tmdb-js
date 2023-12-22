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
  runtime: number;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TVEpisodesGetDetailsCrew {
  department: string;
  job: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  profile_path: null | string;
  name: string;
  original_name: string;
  known_for_department: string;
  popularity: number;
}

export interface TVEpisodesGetDetailsGuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  id: number;
  name: string;
  known_for_department: string;
  profile_path: string;
  gender: number;
  original_name: string;
  popularity: number;
}

export interface TVEpisodesGetDetailsParams<T extends TVEpisodesAppendToResponse[]> {
  language?: string;
  append_to_response?: T;
}

export type TVEpisodesGetDetailsResponse<AppendToResponse extends TVEpisodesAppendToResponse[] | undefined> = TVEpisodesGetDetailsBaseResponse & AppendToResponseType<AppendToResponse, "tv_episodes">;
