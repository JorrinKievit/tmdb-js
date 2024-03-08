export interface MoviesGetNowPlayingResponse {
    page: number;
    results: MoviesGetNowPlayingResult[];
    dates: MoviesGetNowPlayingDates;
    total_pages: number;
    total_results: number;
}

export interface MoviesGetNowPlayingDates {
    maximum: string;
    minimum: string;
}

export interface MoviesGetNowPlayingResult {
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

export interface MoviesGetNowPlayingParams {
    language?: string;
    page?: number;
    region?: string;
}
