import {PeopleBaseCrewGetMovieGetCombinedCredit, PeopleBaseCastGetMovieGetCombinedCredit} from "./base-cast-crew-credits";

export interface PeopleGetCombinedCreditsResponse {
  cast: PeopleGetCombinedCreditsCast[];
  crew: PeopleGetCombinedCreditsCrew[];
  id: number;
}

export type PeopleGetCombinedCreditsCast = PeopleBaseCastGetMovieGetCombinedCredit & {media_type: "movie" | "tv"};
export type PeopleGetCombinedCreditsCrew =  PeopleBaseCrewGetMovieGetCombinedCredit & {media_type: "movie" | "tv"};

export interface PeopleGetCombinedCreditsParams {
  language?: string;
}
