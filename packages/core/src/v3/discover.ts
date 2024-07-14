import { Credentials, Http, ITMDBAPI } from "..";
import { DiscoverMovieDiscoverResponse } from "../types/v3/discover/movie-discover";
import { DiscoverTVDiscoverResponse } from "../types/v3/discover/tv-discover";
import { buildV3Url } from "../utils/api";

export const createV3DiscoverMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["discover"] => {
  return {
    movieDiscover: async (params) => {
      return client.get<DiscoverMovieDiscoverResponse>(buildV3Url(`${apiUrl}discover/movie`, apiKey, params), accessToken);
    },
    tvDiscover: async (params) => {
      return client.get<DiscoverTVDiscoverResponse>(buildV3Url(`${apiUrl}discover/tv`, apiKey, params), accessToken);
    },
  };
};
