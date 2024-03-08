export interface TVRateTVShowsResponse {
    status_code: number;
    status_message: string;
}

export interface TVRateTVShowsParams {
    guest_session_id?: string;
    session_id?: string;
}

export interface TVRateTVShowsBody {
    value: number;
}
