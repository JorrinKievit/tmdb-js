import { PeopleBaseCrewGetMovieCredit, PeopleBaseCastGetMovieCredit, PeopleGetTvCreditsPerson } from "./base-cast-crew-credits";

export interface PeopleGetCombinedCreditsResponse {
  cast: PeopleGetCombinedCreditsCast[];
  crew: PeopleGetCombinedCreditsCrew[];
  id: number;
}

export type PeopleGetCombinedCreditsCast = PeopleBaseCastGetMovieCredit & { media_type: "movie" | "tv"; original_title?: string } & Partial<PeopleGetTvCreditsPerson>;
export type PeopleGetCombinedCreditsCrew = PeopleBaseCrewGetMovieCredit & { media_type: "movie" | "tv"; original_title?: string } & Partial<PeopleGetTvCreditsPerson>;

export interface PeopleGetCombinedCreditsParams {
  language?: string;
}
