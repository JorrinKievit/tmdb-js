export interface TVSeasonsGetCreditsResponse {
    cast: TVSeasonsGetCreditsCast[];
    crew: TVSeasonsGetCreditsCast[];
    id: number;
}

export interface TVSeasonsGetCreditsCast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    character?: string;
    credit_id: string;
    order?: number;
    department?: string;
    job?: string;
}

export interface TVSeasonsGetCreditsParams {
    language?: string;
}
