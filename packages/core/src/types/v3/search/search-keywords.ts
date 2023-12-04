import { PaginatedResponse } from "../PaginatedResults";
import {BaseQueryParams} from "./SearchBaseQueryParamters";



// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchKeywordsResponse extends PaginatedResponse<SearchKeywordsResult> {}

export interface SearchKeywordsResult {
  id: number;
  name: string;
}
// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchKeywordsParams extends BaseQueryParams {}

