export interface TVEpisodesRateTVEpisodeResponse {
    status_code: number;
    status_message: string;
}

export interface TVEpisodesRateTVEpisodeParams {
    guest_session_id?: string;
    session_id?: string;
}

export interface TVEpisodesRateTVEpisodeBody {
    value: number;
}
