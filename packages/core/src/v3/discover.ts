import { Http, ITMDBAPI } from "..";
import { DiscoverMovieDiscoverResponse } from "../types/v3/discover/movie-discover";
import { DiscoverTVDiscoverResponse } from "../types/v3/discover/tv-discover";
import { buildV3Url } from "../utils/api";

export const createV3DiscoverMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["discover"] => {
  return {
    movieDiscover: async (params) => {
      const res = await client.get<DiscoverMovieDiscoverResponse>(buildV3Url(apiKey, `${apiUrl}discover/movie`, params));

      return res;
    },
    tvDiscover: async (params) => {
      const res = await client.get<DiscoverTVDiscoverResponse>(buildV3Url(apiKey, `${apiUrl}discover/tv`, params));

      return res;
    },
  };
};
