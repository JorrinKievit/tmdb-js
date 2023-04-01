export interface TVGetAggregateCreditsResponse {
  cast: TVGetAggregateCreditsCast[];
}

export interface TVGetAggregateCreditsCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  roles: TVGetAggregateCreditsRole[];
  total_episode_count: number;
  order: number;
}

export interface TVGetAggregateCreditsRole {
  credit_id: string;
  character: string;
  episode_count: number;
}

export interface TVGetAggregateCreditsParams {
  language?: string;
}
