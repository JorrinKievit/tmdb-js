import {BaseCrewCredit, BaseCastCredit} from "../base-credit-results";

export interface TVGetCreditsResponse {
    cast: TVGetCreditsCast[];
    crew: TVGetCreditsCrew[];
    id: number;
}

export type TVGetCreditsCast = BaseCastCredit;
export type TVGetCreditsCrew = BaseCrewCredit;

export interface TVGetCreditsParams {
    language?: string;
}
