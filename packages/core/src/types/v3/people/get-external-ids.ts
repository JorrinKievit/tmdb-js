export interface PeopleGetExternalIdsResponse {
  imdb_id: string;
  facebook_id: null | string;
  freebase_mid: null | string;
  freebase_id: null | string;
  tvrage_id: null | number;
  twitter_id: null | string;
  id: number;
  instagram_id: null | string;
}

export interface PeopleGetExternalIdsParams {
  language?: string;
}
