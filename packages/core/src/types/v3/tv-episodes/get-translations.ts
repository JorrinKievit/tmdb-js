export interface TVEpisodesGetTranslationsResponse {
  id: number;
  translations: TVEpisodesGetTranslationsTranslation[];
}

export interface TVEpisodesGetTranslationsTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: TVEpisodesGetTranslationsData;
}

export interface TVEpisodesGetTranslationsData {
  name: string;
  overview: string;
}
