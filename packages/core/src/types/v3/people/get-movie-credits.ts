import {PeopleEndpointBaseCastGetMovieGetCombinedCredit, PeopleEndpointBaseCrewGetMovieGetCombinedCredit} from "./bast-cast-crew-credits";

export interface PeopleGetMovieCreditsResponse {
  cast: PeopleGetMovieCreditsCast[];
  crew: PeopleGetMovieCreditsCrew[];
  id: number;
}

export type PeopleGetMovieCreditsCast = PeopleEndpointBaseCastGetMovieGetCombinedCredit;
export type PeopleGetMovieCreditsCrew = PeopleEndpointBaseCrewGetMovieGetCombinedCredit;
export interface PeopleGetMovieCreditsParams {
  language?: string;
}
