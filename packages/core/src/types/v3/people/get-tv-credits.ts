export interface PeopleGetTvCreditsResponse {
  cast: PeopleGetTvCreditsCast[];
}

export interface PeopleGetTvCreditsCast {
  credit_id: string;
  original_name: string;
  id: number;
  genre_ids: number[];
  character: string;
  name: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  episode_count: number;
  original_language: string;
  first_air_date: string;
  backdrop_path: string;
  overview: string;
  origin_country: string[];
}

export interface PeopleGetTvCreditsParams {
  language?: string;
}
