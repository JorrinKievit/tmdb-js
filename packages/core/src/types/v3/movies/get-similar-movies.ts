export interface MoviesGetSimilarMoviesResponse {
    page: number;
    results: MoviesGetSimilarMoviesResult[];
    total_pages: number;
    total_results: number;
}

export interface MoviesGetSimilarMoviesResult {
    adult: boolean;
    backdrop_path: null | string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: null | string;
    popularity: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesGetSimilarMoviesParams {
    language?: string;
    page?: number;
}
