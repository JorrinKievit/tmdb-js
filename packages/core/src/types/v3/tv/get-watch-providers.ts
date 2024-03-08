export interface TVGetWatchProvidersResponse {
  id: number;
  results: TVGetWatchProvidersResults;
}

export interface TVGetWatchProvidersResults {
  [key: string]: TVGetWatchProvidersAr | TVGetWatchProvidersAt | TVGetWatchProvidersRu;
}

export interface TVGetWatchProvidersAr {
  link: string;
  flatrate: TVGetWatchProvidersFlatrate[];
}

export interface TVGetWatchProvidersFlatrate {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface TVGetWatchProvidersAt {
  link: string;
  buy?: TVGetWatchProvidersFlatrate[];
  flatrate: TVGetWatchProvidersFlatrate[];
  ads?: TVGetWatchProvidersFlatrate[];
  rent?: TVGetWatchProvidersFlatrate[];
}

export interface TVGetWatchProvidersRu {
  link: string;
  flatrate: TVGetWatchProvidersFlatrate[];
  free: TVGetWatchProvidersFlatrate[];
}
