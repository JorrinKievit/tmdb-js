import { Http, ITMDBAPI } from "..";
import { ReviewsGetDetailsResponse } from "../types/v3/reviews/get-details";
import { buildV3Url } from "../utils/api";

export const createV3ReviewsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["reviews"] => {
  return {
    getDetails: async (reviewId: string) => {
      const res = await client.get<ReviewsGetDetailsResponse>(buildV3Url(apiKey, `${url}review/${reviewId}`));

      return res;
    },
  };
};
