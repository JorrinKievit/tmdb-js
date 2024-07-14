import { Credentials, Http, ITMDBAPI } from "..";
import { CreditsGetDetailsResponse } from "../types/v3/credits/get-details";
import { buildV3Url } from "../utils/api";

export const createV3CreditsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["credits"] => {
  return {
    getDetails: async (creditId: string) => {
      return client.get<CreditsGetDetailsResponse>(buildV3Url(`${url}credit/${creditId}`, apiKey), accessToken);
    },
  };
};
