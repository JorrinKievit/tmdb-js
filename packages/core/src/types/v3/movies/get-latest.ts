export interface MoviesGetLatestResponse {
  adult: boolean;
  backdrop_path: null;
  belongs_to_collection: null;
  budget: number;
  genres: MoviesGetLatestGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: unknown[];
  production_countries: unknown[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: unknown[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesGetLatestGenre {
  id: number;
  name: string;
}

export interface MoviesGetLatestParams {
  language?: string;
}
