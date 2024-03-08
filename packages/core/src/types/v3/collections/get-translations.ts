export interface CollectionsGetTranslationsResponse {
    id: number;
    translations: CollectionsGetTranslationsTranslation[];
}

export interface CollectionsGetTranslationsTranslation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: CollectionsGetTranslationsData;
}

export interface CollectionsGetTranslationsData {
    title: string;
    overview: string;
    homepage: string;
}

export interface CollectionsGetTranslationsParams {
    language?: string;
}
