export interface TVSeasonsGetChangesResponse {
  changes: TVSeasonsGetChangesChange[];
}

export interface TVSeasonsGetChangesChange {
  key: string;
  items: TVSeasonsGetChangesItem[];
}

export interface TVSeasonsGetChangesItem {
  id: string;
  action: string;
  time: string;
  value?: TVSeasonsGetChangesValueClass | string;
  original_value?: string;
  iso_639_1?: string;
}

export interface TVSeasonsGetChangesValueClass {
  episode_id: number;
  episode_number: number;
}

export interface TVSeasonsGetChangesParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}
