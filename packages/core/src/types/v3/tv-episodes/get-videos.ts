export interface TVEpisodesGetVideosResponse {
  id: number;
  results: TVEpisodesGetVideosResult[];
}

export interface TVEpisodesGetVideosResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}

export interface TVEpisodesGetVideosParams {
  language?: string;
}
