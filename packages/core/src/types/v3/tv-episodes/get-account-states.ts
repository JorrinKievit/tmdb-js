export interface TVEpisodesGetAccountStatesResponse {
    id: number;
    rated: boolean | TVEpisodesGetAccountStatesRatedClass;
}

export interface TVEpisodesGetAccountStatesRatedClass {
    value: number;
}

export interface TVEpisodesGetAccountStatesParams {
    language?: string;
    guest_session_id?: string;
    session_id?: string;
}
