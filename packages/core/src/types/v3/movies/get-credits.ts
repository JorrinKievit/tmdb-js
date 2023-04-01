export interface MoviesGetCreditsResponse {
  id: number;
  cast: MoviesGetCreditsCast[];
}

export interface MoviesGetCreditsCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MoviesGetCreditsParams {
  language?: string;
}
