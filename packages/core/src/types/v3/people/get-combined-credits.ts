export interface PeopleGetCombinedCreditsResponse {
  cast: PeopleGetCombinedCreditsCast[];
}

export interface PeopleGetCombinedCreditsCast {
  id: number;
  original_language: string;
  episode_count: number;
  overview: string;
  origin_country: string[];
  original_name: string;
  genre_ids: number[];
  name: string;
  media_type: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string;
  popularity: number;
  credit_id: string;
}

export interface PeopleGetCombinedCreditsParams {
  language?: string;
}
