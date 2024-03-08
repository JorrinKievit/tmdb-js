export interface MoviesGetAccountStatesResponse {
    id: number;
    favorite: boolean;
    rated: {
        value: number;
    };
    watchlist: boolean;
}

export interface MoviesGetAccountStatesParams {
    session_id: string;
    guest_session_id?: string;
}
