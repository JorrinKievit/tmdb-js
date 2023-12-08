import {PeopleBaseCastGetTvCredit, PeopleBaseCrewGetTvCredit} from "./bast-cast-crew-credits";

export interface PeopleGetTvCreditsResponse {
  cast: PeopleGetTvCreditsCast[];
  crew: PeopleGetTvCreditsCrew[];
  id: number;
}

export interface PeopleGetTvCreditsPerson {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
  episode_count: number;
}
export type PeopleGetTvCreditsCast = PeopleGetTvCreditsPerson & PeopleBaseCastGetTvCredit;
export type PeopleGetTvCreditsCrew = PeopleGetTvCreditsPerson & PeopleBaseCrewGetTvCredit;


export interface PeopleGetTvCreditsParams {
  language?: string;
}
