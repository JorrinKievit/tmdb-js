export interface TVEpisodesGetCreditsResponse {
    cast: TVEpisodesGetCreditsCast[];
    crew: TVEpisodesGetCreditsCast[];
    guest_stars: TVEpisodesGetCreditsCast[];
    id: number;
}

export interface TVEpisodesGetCreditsCast {
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
    character_name?: string;
}

export interface TVEpisodesGetCreditsParams {
    language?: string;
}
