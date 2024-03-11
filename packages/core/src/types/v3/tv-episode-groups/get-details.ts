export interface TVEpisodeGroupsGetDetailsResponse {
  description: string;
  episode_count: number;
  group_count: number;
  groups: TVEpisodeGroupsGetDetailsGroup[];
  id: string;
  name: string;
  network: TVEpisodeGroupsGetDetailsNetwork;
  type: number;
}

export interface TVEpisodeGroupsGetDetailsGroup {
  id: string;
  name: string;
  order: number;
  episodes: TVEpisodeGroupsGetDetailsEpisode[];
  locked: boolean;
}

export interface TVEpisodeGroupsGetDetailsEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: null | string;
  season_number: number;
  show_id: number;
  still_path: null | string;
  vote_average: number;
  vote_count: number;
  order: number;
}

export interface TVEpisodeGroupsGetDetailsNetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface TVEpisodeGroupsGetDetailsParams {
  language?: string;
}
