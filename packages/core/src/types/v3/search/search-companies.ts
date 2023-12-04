import { PaginatedResponse } from '../PaginatedResults';
import {BaseQueryParams} from "./SearchBaseQueryParamters";

export interface SearchCompaniesResponse extends PaginatedResponse<SearchCompaniesResult> {}

export interface SearchCompaniesResult {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface SearchCompaniesParams extends BaseQueryParams {}


