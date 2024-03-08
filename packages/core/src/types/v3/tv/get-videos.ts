export interface TVGetVideosResponse {
    id: number;
    results: TVGetVideosResult[];
}

export interface TVGetVideosResult {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface TVGetVideosParams {
    language?: string;
}
