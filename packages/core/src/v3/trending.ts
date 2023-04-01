import { Http, ITMDBAPI } from "..";
import { TrendingGetTrendingResponse } from "../types/v3/trending/get-trending";
import { buildV3Url } from "../utils/api";

export const createV3TrendingMethods = (
  client: Http,
  apiKey: string,
  url: string
): ITMDBAPI["v3"]["trending"] => {
  return {
    getTrending: async (trendingId: string) => {
      const res = await client.get<TrendingGetTrendingResponse>(
        buildV3Url(apiKey, `${url}trending/${trendingId}`)
      );

      return res;
    },
  };
};
