import { PaginatedResponse } from "../PaginatedResults";
import {SearchQueryParams} from "./SearchBaseQueryParamters";


// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchMoviesResponse extends PaginatedResponse<SearchMoviesResult> {}

export interface SearchMoviesResult {
  poster_path: null | string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface SearchMoviesParams extends SearchQueryParams {
  region?: string;
  year?: number;
  primary_release_year?: number;
}
