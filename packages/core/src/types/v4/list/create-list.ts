export interface V4ListCreateListResponse {
    status_message: string;
    id: number;
    success: boolean;
    status_code: number;
}

export interface V4ListCreateListBody {
    name: string;
    iso_639_1: string;
    description?: string;
    public?: boolean;
    iso_3166_1?: string;
}
