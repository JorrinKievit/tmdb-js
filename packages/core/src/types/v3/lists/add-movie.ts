export interface ListsAddMovieResponse {
    status_code: number;
    status_message: string;
}

export interface ListsAddMovieParams {
    session_id: string;
}

export interface ListsAddMovieBody {
    media_id: number;
}
