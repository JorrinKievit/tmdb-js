export interface DiscoverMovieDiscoverResponse {
    page: number;
    results: DiscoverMovieDiscoverResult[];
    total_results: number;
    total_pages: number;
}

export interface DiscoverMovieDiscoverResult {
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

export interface DiscoverMovieDiscoverParams {
    language?: string;
    region?: string;
    sort_by?: string;
    certification_country?: string;
    certification?: string;
    ["certification.lte"]?: string;
    ["certification.gte"]?: string;
    include_adult?: boolean;
    include_video?: boolean;
    page?: number;
    primary_release_year?: number;
    ["primary_release_date.gte"]?: string;
    ["primary_release_date.lte"]?: string;
    ["release_date.gte"]?: string;
    ["release_date.lte"]?: string;
    with_release_type?: number;
    year?: number;
    ["vote_count.gte"]?: number;
    ["vote_count.lte"]?: number;
    ["vote_average.gte"]?: number;
    ["vote_average.lte"]?: number;
    with_cast?: string;
    with_crew?: string;
    with_people?: string;
    with_companies?: string;
    with_genres?: string;
    without_genres?: string;
    with_keywords?: string;
    with_runtime?: string;
    ["with_runtime.gte"]?: number;
    ["with_runtime.lte"]?: number;
    with_original_language?: string;
    with_watch_providers?: string;
    watch_region?: string;
    with_watch_monetization_types?: string;
    without_companies?: string;
}
