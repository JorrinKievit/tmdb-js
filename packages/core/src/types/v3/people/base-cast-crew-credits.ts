export interface PeoplePersonCredit {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  credit_id: string;
}

interface PeopleCastAndCrewGetCombinedGetMovieCredit extends PeoplePersonCredit {
  release_date: string;
  title: string;
  video: boolean;
}

interface PeopleCastCreditSpecificFields {
  character: string;
}

interface PeopleCrewCreditSpecificFields {
  job: string;
  department: string;
}

export interface PeopleBaseCastGetMovieCredit extends PeopleCastAndCrewGetCombinedGetMovieCredit, PeopleCastCreditSpecificFields {
  order: number;
}

export type PeopleBaseCrewGetMovieCredit = PeopleCastAndCrewGetCombinedGetMovieCredit & PeopleCrewCreditSpecificFields;

export type PeopleBaseCastGetTvCredit = PeoplePersonCredit & { character: string };
export type PeopleBaseCrewGetTvCredit = PeoplePersonCredit & PeopleCrewCreditSpecificFields;

export interface PeopleGetTvCreditsPerson {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
  episode_count: number;
}
