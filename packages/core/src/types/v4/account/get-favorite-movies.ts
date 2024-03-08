export interface V4AccountGetFavoriteMoviesResponse {
    page: number;
    results: V4AccountGetFavoriteMoviesResult[];
    total_results: number;
    total_pages: number;
}

export interface V4AccountGetFavoriteMoviesResult {
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

export interface V4AccountGetFavoriteMoviesParams {
    page?: number;
    sort_by?: string;
}
