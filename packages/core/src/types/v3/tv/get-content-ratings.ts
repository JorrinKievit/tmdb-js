export interface TVGetContentRatingsResponse {
    results: TVGetContentRatingsResult[];
    id: number;
}

export interface TVGetContentRatingsResult {
    iso_3166_1: string;
    rating: string;
}

export interface TVGetContentRatingsParams {
    language?: string;
}
