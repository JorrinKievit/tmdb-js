export interface MoviesGetKeywordsResponse {
    id: number;
    keywords: MoviesGetKeywordsKeyword[];
}

export interface MoviesGetKeywordsKeyword {
    id: number;
    name: string;
}
