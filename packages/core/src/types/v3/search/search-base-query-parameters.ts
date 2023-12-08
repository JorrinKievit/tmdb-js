export interface BaseQueryParams {
  query: string;
  page?: number;
}

export interface SearchQueryParams extends BaseQueryParams {
  include_adult?: boolean;
  language?: string;
}
