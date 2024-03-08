export interface MoviesDeleteRatingResponse {
    status_code: number;
    status_message: string;
}

export interface MoviesDeleteRatingParams {
    guest_session_id?: string;
    session_id?: string;
}
