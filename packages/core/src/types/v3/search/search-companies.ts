import {PaginatedResponse} from "../paginated-response";
import {BaseQueryParams} from "./search-base-query-parameters";

export type SearchCompaniesResponse = PaginatedResponse<SearchCompaniesResult>;

export interface SearchCompaniesResult {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export type SearchCompaniesParams = BaseQueryParams;
