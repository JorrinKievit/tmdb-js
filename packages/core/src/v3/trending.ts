import { Credentials, Http, ITMDBAPI } from "..";
import { TrendingGetTrendingResponse } from "../types/v3/trending/get-trending";
import { buildV3Url } from "../utils/api";

export const createV3TrendingMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["trending"] => {
  return {
    getTrending: async (mediaType, timeWindow, language) => {
      return client.get<TrendingGetTrendingResponse>(buildV3Url(`${url}trending/${mediaType}/${timeWindow}`, apiKey, { language }), accessToken);
    },
  };
};
