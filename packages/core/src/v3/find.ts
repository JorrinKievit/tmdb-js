import { Credentials, Http, ITMDBAPI } from "..";
import { FindFindByIdResponse } from "../types/v3/find/find-by-id";
import { buildV3Url } from "../utils/api";

export const createV3FindMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["find"] => {
  return {
    findById: async (externalId: string, params) => {
      return client.get<FindFindByIdResponse>(buildV3Url(`${url}find/${externalId}`, apiKey, params), accessToken);
    },
  };
};
