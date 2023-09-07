import { AppendToResponseType, MoviesAppendToResponse } from "../../append-to-response";
import { BelongsToConnection } from "./shared";

export type MoviesGetDetailsBaseResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToConnection | null;
  budget: number;
  genres: MoviesGetDetailsGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: MoviesGetDetailsProductionCompany[];
  production_countries: MoviesGetDetailsProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MoviesGetDetailsSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MoviesGetDetailsGenre {
  id: number;
  name: string;
}

export interface MoviesGetDetailsProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface MoviesGetDetailsProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface MoviesGetDetailsSpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface MoviesGetDetailsParams<T extends MoviesAppendToResponse[]> {
  language?: string;
  append_to_response?: T;
}

export type MoviesGetDetailsResponse<AppendToResponse extends MoviesAppendToResponse[] | undefined> = MoviesGetDetailsBaseResponse & AppendToResponseType<AppendToResponse>;
