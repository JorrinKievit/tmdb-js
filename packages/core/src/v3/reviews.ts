import { Credentials, Http, ITMDBAPI } from "..";
import { ReviewsGetDetailsResponse } from "../types/v3/reviews/get-details";
import { buildV3Url } from "../utils/api";

export const createV3ReviewsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["reviews"] => {
  return {
    getDetails: async (reviewId: string) => {
      return client.get<ReviewsGetDetailsResponse>(buildV3Url(`${url}review/${reviewId}`, apiKey), accessToken);
    },
  };
};
