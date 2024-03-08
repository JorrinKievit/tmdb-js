export interface TVSeasonsGetTranslationsResponse {
  id: number;
  translations: TVSeasonsGetTranslationsTranslation[];
}

export interface TVSeasonsGetTranslationsTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: TVSeasonsGetTranslationsData;
}

export interface TVSeasonsGetTranslationsData {
  name: string;
  overview: string;
}

export interface TVSeasonsGetTranslationsParams {
  language?: string;
}
