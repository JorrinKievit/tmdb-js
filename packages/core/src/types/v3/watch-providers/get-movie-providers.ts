export interface WatchProvidersGetMovieProvidersResponse {
  results: WatchProvidersGetMovieProvidersResult[];
}

export interface WatchProvidersGetMovieProvidersResult {
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
}

export interface WatchProvidersGetMovieProvidersParams {
  language?: string;
  watch_region?: string;
}
