export interface ListsClearListResponse {
    status_code: number;
    status_message: string;
}

export interface ListsClearListParams {
    session_id: string;
    confirm: boolean;
}
