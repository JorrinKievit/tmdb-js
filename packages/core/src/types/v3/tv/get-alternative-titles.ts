export interface TVGetAlternativeTitlesResponse {
  id: number;
  results: TVGetAlternativeTitlesResult[];
}

export interface TVGetAlternativeTitlesResult {
  iso_3166_1: string;
  title: string;
}

export interface TVGetAlternativeTitlesParams {
  language?: string;
}
