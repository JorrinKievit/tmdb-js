import {PeopleEndpointBaseCrewGetMovieGetCombinedCredit, PeopleEndpointBaseCastGetMovieGetCombinedCredit} from "./bast-cast-crew-credits";

export interface PeopleGetCombinedCreditsResponse {
  cast: PeopleGetCombinedCreditsCast[];
  crew: PeopleGetCombinedCreditsCrew[];
  id: number;
}

export type PeopleGetCombinedCreditsCast = PeopleEndpointBaseCastGetMovieGetCombinedCredit & {media_type: string};
export type PeopleGetCombinedCreditsCrew =  PeopleEndpointBaseCrewGetMovieGetCombinedCredit & {media_type: string};

export interface PeopleGetCombinedCreditsParams {
  language?: string;
}
