export interface ChangesGetMovieChangeListResponse {
    results: ChangesGetMovieChangeListResult[];
    page: number;
    total_pages: number;
    total_results: number;
}

export interface ChangesGetMovieChangeListResult {
    id: number;
    adult: boolean;
}

export interface ChangesGetMovieChangeListParams {
    start_date?: string;
    end_date?: string;
    page?: number;
}
