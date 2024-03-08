export interface WatchProvidersGetTVProvidersResponse {
  results: WatchProvidersGetTVProvidersResult[];
}

export interface WatchProvidersGetTVProvidersResult {
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
}

export interface WatchProvidersGetTVProvidersParams {
  language?: string;
  watch_region?: string;
}
