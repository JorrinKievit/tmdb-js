export interface V4ListCheckItemStatusResponse {
    media_type: string;
    success: boolean;
    status_message: string;
    id: number;
    media_id: number;
    status_code: number;
}

export interface V4ListCheckItemStatusParams {
    media_id: number;
    media_type: string;
}
