export interface GenresGetTVListResponse {
    genres: GenresGetTVListGenre[];
}

export interface GenresGetTVListGenre {
    id: number;
    name: string;
}

export interface GenresGetTVListParams {
    language?: string;
}
