export interface PeopleGetLatestResponse {
  adult: boolean;
  also_known_as: object[];
  biography: null | string;
  birthday: null | string;
  deathday: null | string;
  gender: number;
  homepage: null | string;
  id: number;
  imdb_id: null | string;
  place_of_birth: null | string;
  popularity: number;
  profile_path: null | string;
}

export interface PeopleGetLatestParams {
  language?: string;
}
