import { PeopleBaseCastGetMovieCredit, PeopleBaseCrewGetMovieCredit } from "./base-cast-crew-credits";

export interface PeopleGetMovieCreditsResponse {
  cast: PeopleGetMovieCreditsCast[];
  crew: PeopleGetMovieCreditsCrew[];
  id: number;
}

export type PeopleGetMovieCreditsCast = PeopleBaseCastGetMovieCredit & { original_title: string };
export type PeopleGetMovieCreditsCrew = PeopleBaseCrewGetMovieCredit & { original_title: string };

export interface PeopleGetMovieCreditsParams {
  language?: string;
}
