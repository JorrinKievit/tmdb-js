export interface TVSeasonsGetExternalIDsResponse {
    id: number;
    freebase_mid?: null | string;
    freebase_id?: null | string;
    tvdb_id?: null | number;
    tvrage_id?: null | number;
}

export interface TVSeasonsGetExternalIDsParams {
    language?: string;
}
