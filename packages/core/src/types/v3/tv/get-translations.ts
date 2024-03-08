export interface TVGetTranslationsResponse {
  id: number;
  translations: TVGetTranslationsTranslation[];
}

export interface TVGetTranslationsTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: TVGetTranslationsData;
}

export interface TVGetTranslationsData {
  name: string;
  overview: string;
  homepage: string;
}
