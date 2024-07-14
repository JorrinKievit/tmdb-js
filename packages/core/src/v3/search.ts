import { Credentials, Http, ITMDBAPI } from "..";
import { SearchMultiSearchResponse } from "../types/v3/search/multi-search";
import { SearchCollectionsResponse } from "../types/v3/search/search-collections";
import { SearchCompaniesResponse } from "../types/v3/search/search-companies";
import { SearchKeywordsResponse } from "../types/v3/search/search-keywords";
import { SearchMoviesResponse } from "../types/v3/search/search-movies";
import { SearchPeopleResponse } from "../types/v3/search/search-people";
import { SearchTVShowsResponse } from "../types/v3/search/search-tvshows";
import { buildV3Url } from "../utils/api";

export const createV3SearchMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["search"] => {
  return {
    searchCompanies: async (params) => {
      return client.get<SearchCompaniesResponse>(buildV3Url(`${url}search/company`, apiKey, params), accessToken);
    },
    searchCollections: async (params) => {
      return client.get<SearchCollectionsResponse>(buildV3Url(`${url}search/collection`, apiKey, params), accessToken);
    },
    searchKeywords: async (params) => {
      return client.get<SearchKeywordsResponse>(buildV3Url(`${url}search/keyword`, apiKey, params), accessToken);
    },
    searchMovies: async (params) => {
      return client.get<SearchMoviesResponse>(buildV3Url(`${url}search/movie`, apiKey, params), accessToken);
    },
    searchMulti: async (params) => {
      return client.get<SearchMultiSearchResponse>(buildV3Url(`${url}search/multi`, apiKey, params), accessToken);
    },
    searchPeople: async (params) => {
      return client.get<SearchPeopleResponse>(buildV3Url(`${url}search/person`, apiKey, params), accessToken);
    },
    searchTV: async (params) => {
      return client.get<SearchTVShowsResponse>(buildV3Url(`${url}search/tv`, apiKey, params), accessToken);
    },
  };
};
