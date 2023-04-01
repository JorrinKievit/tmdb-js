export interface TVGetCreditsResponse {
  cast: TVGetCreditsCast[];
}

export interface TVGetCreditsCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface TVGetCreditsParams {
  language?: string;
}
