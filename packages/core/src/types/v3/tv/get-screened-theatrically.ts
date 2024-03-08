export interface TVGetScreenedTheatricallyResponse {
    id: number;
    results: TVGetScreenedTheatricallyResult[];
}

export interface TVGetScreenedTheatricallyResult {
    id: number;
    episode_number: number;
    season_number: number;
}

export interface TVGetScreenedTheatricallyParams {
    language?: string;
}
