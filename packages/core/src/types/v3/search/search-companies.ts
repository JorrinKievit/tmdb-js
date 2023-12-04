import { PaginatedResponse } from '../PaginatedResults';
import {BaseQueryParams} from "./SearchBaseQueryParamters";

// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchCompaniesResponse extends PaginatedResponse<SearchCompaniesResult> {}

export interface SearchCompaniesResult {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchCompaniesParams extends BaseQueryParams {}


