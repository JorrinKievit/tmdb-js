export interface WatchProvidersGetAvailableRegionsResponse {
  results: WatchProvidersGetAvailableRegionsResult[];
}

export interface WatchProvidersGetAvailableRegionsResult {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export interface WatchProvidersGetAvailableRegionsParams {
  language?: string;
}
