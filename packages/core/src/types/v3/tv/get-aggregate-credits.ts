import {BasePersonCredit} from "../base-credit-results";

export interface TVGetAggregateCreditsResponse {
    cast: TVGetAggregateCreditsCast[];
    crew: TVGetAggregateCreditsCrew[];
    id: number;
}

export interface TvGetAggregateCreditsRole {
    credit_id: string;
    episode_count: number;
}

type BaseAggregateCredits = Omit<BasePersonCredit, "credit_id"> & { total_episode_count: number };

export interface TVGetAggregateCreditsCast extends BaseAggregateCredits {
    roles: (TvGetAggregateCreditsRole & { character: string })[];
    order: number;
}

export interface TVGetAggregateCreditsCrew extends BaseAggregateCredits {
    jobs: (TvGetAggregateCreditsRole & { job: string })[];
    department: string;
}

export interface TVGetAggregateCreditsParams {
    language?: string;
}
