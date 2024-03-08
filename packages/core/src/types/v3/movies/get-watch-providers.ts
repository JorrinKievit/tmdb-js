export interface MoviesGetWatchProvidersResponse {
    id: number;
    results: MoviesGetWatchProvidersResults;
}

export interface MoviesGetWatchProvidersResults {
    [key: string]: MoviesGetWatchProvidersAr | MoviesGetWatchProvidersRo;
}

export interface MoviesGetWatchProvidersAr {
    link: string;
    flatrate?: MoviesGetWatchProvidersBuy[];
    rent?: MoviesGetWatchProvidersBuy[];
    buy: MoviesGetWatchProvidersBuy[];
}

export interface MoviesGetWatchProvidersBuy {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}

export interface MoviesGetWatchProvidersRo {
    link: string;
    flatrate: MoviesGetWatchProvidersBuy[];
}
