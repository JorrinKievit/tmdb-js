import { Http, ITMDBAPI } from "..";
import { WatchProvidersGetAvailableRegionsResponse } from "../types/v3/watch-providers/get-available-regions";
import { WatchProvidersGetMovieProvidersResponse } from "../types/v3/watch-providers/get-movie-providers";
import { WatchProvidersGetTVProvidersResponse } from "../types/v3/watch-providers/get-tv-providers";
import { buildV3Url } from "../utils/api";

export const createV3WatchProvidersMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["watchProviders"] => {
  return {
    getAvailableRegions: async (params) => {
      const res = await client.get<WatchProvidersGetAvailableRegionsResponse>(buildV3Url(apiKey, `${url}watch/providers/regions`, params));

      return res;
    },
    getMovieProviders: async (params) => {
      const res = await client.get<WatchProvidersGetMovieProvidersResponse>(buildV3Url(apiKey, `${url}watch/providers/movie`, params));

      return res;
    },
    getTVProviders: async (params) => {
      const res = await client.get<WatchProvidersGetTVProvidersResponse>(buildV3Url(apiKey, `${url}watch/providers/tv`, params));

      return res;
    },
  };
};
