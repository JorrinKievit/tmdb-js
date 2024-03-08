export interface TVSeasonsGetVideosResponse {
    id: number;
    results: TVSeasonsGetVideosResult[];
}

export interface TVSeasonsGetVideosResult {
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

export interface TVSeasonsGetVideosParams {
    language?: string;
}
