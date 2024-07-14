export interface CreditsGetDetailsResponse {
  credit_type: string;
  department: string;
  job: string;
  media: CreditsGetDetailsMedia;
  media_type: "movie" | "tv";
  id: string;
  person: CreditsGetDetailsPerson;
}

export interface CreditsGetDetailsMedia {
  id: number;
  name: string;
  original_name: string;
  character: string;
  episodes: any[];
  seasons: CreditsGetDetailsSeason[];
}

export interface CreditsGetDetailsSeason {
  air_date: string;
  poster_path: string;
  season_number: number;
}

export interface CreditsGetDetailsPerson {
  name: string;
  id: number;
}
