export interface MoviesGetTranslationsResponse {
    id: number;
    translations: MoviesGetTranslationsTranslation[];
}

export interface MoviesGetTranslationsTranslation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: MoviesGetTranslationsData;
}

export interface MoviesGetTranslationsData {
    title: string;
    overview: string;
    homepage: string;
}
