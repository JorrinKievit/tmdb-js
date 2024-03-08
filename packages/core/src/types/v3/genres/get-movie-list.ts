export interface GenresGetMovieListResponse {
    genres: GenresGetMovieListGenre[];
}

export interface GenresGetMovieListGenre {
    id: number;
    name: string;
}

export interface GenresGetMovieListParams {
    language?: string;
}
