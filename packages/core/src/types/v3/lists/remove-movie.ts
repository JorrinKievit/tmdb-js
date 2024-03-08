export interface ListsRemoveMovieResponse {
    status_code: number;
    status_message: string;
}

export interface ListsRemoveMovieParams {
    session_id: string;
}

export interface ListsRemoveMovieBody {
    media_id: number;
}
