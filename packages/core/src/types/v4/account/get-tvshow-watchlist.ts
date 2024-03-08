export interface V4AccountGetTVShowWatchlistResponse {
    page: number;
    results: V4AccountGetTVShowWatchlistResult[];
    total_results: number;
    total_pages: number;
}

export interface V4AccountGetTVShowWatchlistResult {
    poster_path: null | string;
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

export interface V4AccountGetTVShowWatchlistParams {
    page?: number;
    sort_by?: string;
}
