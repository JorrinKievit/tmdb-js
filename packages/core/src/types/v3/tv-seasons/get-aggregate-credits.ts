export interface TVSeasonsGetAggregateCreditsResponse {
    cast: TVSeasonsGetAggregateCreditsCast[];
    crew: TVSeasonsGetAggregateCreditsCast[];
    id: number;
}

export interface TVSeasonsGetAggregateCreditsCast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    roles?: TVSeasonsGetAggregateCreditsRole[];
    total_episode_count: number;
    order?: number;
    jobs?: TVSeasonsGetAggregateCreditsJob[];
    department?: string;
}

export interface TVSeasonsGetAggregateCreditsJob {
    credit_id: string;
    job: string;
    episode_count: number;
}

export interface TVSeasonsGetAggregateCreditsRole {
    credit_id: string;
    character: string;
    episode_count: number;
}

export interface TVSeasonsGetAggregateCreditsParams {
    language?: string;
}
