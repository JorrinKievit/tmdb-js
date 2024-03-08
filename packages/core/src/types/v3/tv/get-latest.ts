export interface TVGetLatestResponse {
    backdrop_path: null | string;
    created_by: unknown[];
    episode_run_time: number[];
    first_air_date: string;
    genres: TVGetLatestGenre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    name: string;
    networks: TVGetLatestGenre[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: null | string;
    popularity: number;
    poster_path: null | string;
    production_companies: unknown[];
    seasons: TVGetLatestSeason[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface TVGetLatestGenre {
    id: number;
    name: string;
}

export interface TVGetLatestSeason {
    air_date: string;
    episode_count: number;
    id: number;
    poster_path: null | string;
    season_number: number;
}

export interface TVGetLatestParams {
    language?: string;
}
