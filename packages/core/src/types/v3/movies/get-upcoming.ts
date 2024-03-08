export interface MoviesGetUpcomingResponse {
    page: number;
    results: MoviesGetUpcomingResult[];
    total_results: number;
    total_pages: number;
}

export interface MoviesGetUpcomingResult {
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

export interface MoviesGetUpcomingParams {
    language?: string;
    page?: number;
    region?: string;
}
