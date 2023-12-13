import { PeopleBaseCastGetMovieGetCombinedCredit, PeopleBaseCrewGetMovieGetCombinedCredit } from "./base-cast-crew-credits";

export interface PeopleGetMovieCreditsResponse {
  cast: PeopleGetMovieCreditsCast[];
  crew: PeopleGetMovieCreditsCrew[];
  id: number;
}

export type PeopleGetMovieCreditsCast = PeopleBaseCastGetMovieGetCombinedCredit;
export type PeopleGetMovieCreditsCrew = PeopleBaseCrewGetMovieGetCombinedCredit;
export interface PeopleGetMovieCreditsParams {
  language?: string;
}
