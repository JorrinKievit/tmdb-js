import { PeopleBaseCastGetTvCredit, PeopleBaseCrewGetTvCredit, PeopleGetTvCreditsPerson } from "./base-cast-crew-credits";

export interface PeopleGetTvCreditsResponse {
  cast: PeopleGetTvCreditsCast[];
  crew: PeopleGetTvCreditsCrew[];
  id: number;
}

export type PeopleGetTvCreditsCast = PeopleGetTvCreditsPerson & PeopleBaseCastGetTvCredit;
export type PeopleGetTvCreditsCrew = PeopleGetTvCreditsPerson & PeopleBaseCrewGetTvCredit;

export interface PeopleGetTvCreditsParams {
  language?: string;
}
