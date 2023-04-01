export interface PeopleGetDetailsResponse {
  birthday: string;
  known_for_department: string;
  deathday: null;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: null;
}

export interface PeopleGetDetailsParams {
  language?: string;
  append_to_response?: string;
}
