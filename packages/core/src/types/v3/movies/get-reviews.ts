export interface MoviesGetReviewsResponse {
    id: number;
    page: number;
    results: MoviesGetReviewsResult[];
    total_pages: number;
    total_results: number;
}

export interface MoviesGetReviewsResult {
    author: string;
    author_details: MoviesGetReviewsAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}

export interface MoviesGetReviewsAuthorDetails {
    name: string;
    username: string;
    avatar_path: null | string;
    rating: number | null;
}

export interface MoviesGetReviewsParams {
    language?: string;
    page?: number;
}
