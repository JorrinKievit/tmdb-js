export interface PeopleGetTranslationsResponse {
  translations: PeopleGetTranslationsTranslation[];
  id: number;
}

export interface PeopleGetTranslationsTranslation {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  data: PeopleGetTranslationsData;
  english_name: string;
}

export interface PeopleGetTranslationsData {
  biography: string;
}

export interface PeopleGetTranslationsParams {
  language?: string;
}
