export interface MoviesGetAlternativeTitlesResponse {
  id: number;
  titles: MoviesGetAlternativeTitlesTitle[];
}

export interface MoviesGetAlternativeTitlesTitle {
  iso_3166_1: string;
  title: string;
  type: string;
}

export interface MoviesGetAlternativeTitlesParams {
  country?: string;
}
