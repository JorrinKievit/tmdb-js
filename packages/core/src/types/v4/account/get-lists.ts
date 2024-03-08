export interface V4AccountGetListsResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: V4AccountGetListsResult[];
}

export interface V4AccountGetListsResult {
    iso_639_1: string;
    id: number;
    featured: number;
    description: string;
    revenue: string;
    public: number;
    name: string;
    updated_at: string;
    created_at: string;
    sort_by: number;
    backdrop_path?: string;
    runtime: number;
    average_rating: number;
    iso_3166_1: string;
    adult: number;
    number_of_items: number;
    poster_path?: string;
}

export interface V4AccountGetListsParams {
    page?: number;
}
