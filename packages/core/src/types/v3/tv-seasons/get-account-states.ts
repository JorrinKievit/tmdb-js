export interface TVSeasonsGetAccountStatesResponse {
  id: number;
  results: TVSeasonsGetAccountStatesResult[];
}

export interface TVSeasonsGetAccountStatesResult {
  id: number;
  episode_number: number;
  rated: boolean | TVSeasonsGetAccountStatesRatedClass;
}

export interface TVSeasonsGetAccountStatesRatedClass {
  value: number;
}

export interface TVSeasonsGetAccountStatesParams {
  language?: string;
  guest_session_id?: string;
  session_id?: string;
}
