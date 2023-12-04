import { Http, ITMDBAPI } from "..";
import { SearchMultiSearchResponse } from "../types/v3/search/multi-search";
import { SearchCollectionsResponse } from "../types/v3/search/search-collections";
import { SearchCompaniesResponse } from "../types/v3/search/search-companies";
import { SearchKeywordsResponse } from "../types/v3/search/search-keywords";
import { SearchMoviesResponse } from "../types/v3/search/search-movies";
import { SearchPeopleResponse } from "../types/v3/search/search-people";
import { SearchTVShowsResponse } from "../types/v3/search/search-tvshows";
import { buildV3Url } from "../utils/api";


export const createV3SearchMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["search"] => {
  return {
    searchCompanies: async (params) => {
      const res = await client.get<SearchCompaniesResponse>(buildV3Url(apiKey, `${url}search/company`, params));

      return res;
    },
    searchCollections: async (params) => {
      const res = await client.get<SearchCollectionsResponse>(buildV3Url(apiKey, `${url}search/collection`, params));

      return res;
    },
    searchKeywords: async (params) => {
      const res = await client.get<SearchKeywordsResponse>(buildV3Url(apiKey, `${url}search/keyword`, params));

      return res;
    },
    searchMovies: async (params) => {
      const res = await client.get<SearchMoviesResponse>(buildV3Url(apiKey, `${url}search/movie`, params));

      return res;
    },
    searchMulti: async (params) => {
      const res = await client.get<SearchMultiSearchResponse>(buildV3Url(apiKey, `${url}search/multi`, params));

      return res;
    },
    searchPeople: async (params) => {
      const res = await client.get<SearchPeopleResponse>(buildV3Url(apiKey, `${url}search/person`, params));

      return res;
    },
    searchTV: async (params) => {
      const res = await client.get<SearchTVShowsResponse>(buildV3Url(apiKey, `${url}search/tv`, params));

      return res;
    },
  };
};
