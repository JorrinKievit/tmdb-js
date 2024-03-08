export interface V4AccountGetMovieWatchlistResponse {
    page: number;
    results: V4AccountGetMovieWatchlistResult[];
    total_results: number;
    total_pages: number;
}

export interface V4AccountGetMovieWatchlistResult {
    poster_path: null | string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: null | string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface V4AccountGetMovieWatchlistParams {
    page?: number;
    sort_by?: string;
}
