export interface MoviesGetTopRatedResponse {
    page: number;
    results: MoviesGetTopRatedResult[];
    total_results: number;
    total_pages: number;
}

export interface MoviesGetTopRatedResult {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface MoviesGetTopRatedParams {
    language?: string;
    page?: number;
    region?: string;
}
