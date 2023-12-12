import {BaseCastCredit, BaseCrewCredit} from "../base-credit-results";

export interface MoviesGetCreditsResponse {
  id: number;
  cast: MoviesGetCreditsCast[];
  crew: MoviesGetCreditsCrew[];
}

export interface MoviesGetCreditsCast extends BaseCastCredit {
  cast_id: number;
}

export type MoviesGetCreditsCrew =  BaseCrewCredit;
export interface MoviesGetCreditsParams {
  language?: string;
}
