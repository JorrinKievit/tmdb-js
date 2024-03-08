export interface TVGetEpisodeGroupsResponse {
    results: TVGetEpisodeGroupsResult[];
    id: number;
}

export interface TVGetEpisodeGroupsResult {
    description: string;
    episode_count: number;
    group_count: number;
    id: string;
    name: string;
    network: TVGetEpisodeGroupsNetwork | null;
    type: number;
}

export interface TVGetEpisodeGroupsNetwork {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export interface TVGetEpisodeGroupsParams {
    language?: string;
}
