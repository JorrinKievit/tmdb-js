import { Credentials, Http, ITMDBAPI } from "..";
import { WatchProvidersGetAvailableRegionsResponse } from "../types/v3/watch-providers/get-available-regions";
import { WatchProvidersGetMovieProvidersResponse } from "../types/v3/watch-providers/get-movie-providers";
import { WatchProvidersGetTVProvidersResponse } from "../types/v3/watch-providers/get-tv-providers";
import { buildV3Url } from "../utils/api";

export const createV3WatchProvidersMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["watchProviders"] => {
  return {
    getAvailableRegions: async (params) => {
      return client.get<WatchProvidersGetAvailableRegionsResponse>(buildV3Url(`${url}watch/providers/regions`, apiKey, params), accessToken);
    },
    getMovieProviders: async (params) => {
      return client.get<WatchProvidersGetMovieProvidersResponse>(buildV3Url(`${url}watch/providers/movie`, apiKey, params), accessToken);
    },
    getTVProviders: async (params) => {
      return client.get<WatchProvidersGetTVProvidersResponse>(buildV3Url(`${url}watch/providers/tv`, apiKey, params), accessToken);
    },
  };
};
