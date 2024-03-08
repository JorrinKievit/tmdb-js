export interface TVGetTVOnTheAirResponse {
    page: number;
    results: TVGetTVOnTheAirResult[];
    total_results: number;
    total_pages: number;
}

export interface TVGetTVOnTheAirResult {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path: null | string;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}

export interface TVGetTVOnTheAirParams {
    language?: string;
    page?: number;
}
