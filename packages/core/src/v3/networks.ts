import { Credentials, Http, ITMDBAPI } from "..";
import { NetworksGetAlternativeNamesResponse } from "../types/v3/networks/get-alternative-names";
import { NetworksGetDetailsResponse } from "../types/v3/networks/get-details";
import { NetworksGetImagesResponse } from "../types/v3/networks/get-images";
import { buildV3Url } from "../utils/api";

export const createV3NetworksMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["networks"] => {
  return {
    getDetails: async (networkId: number) => {
      return client.get<NetworksGetDetailsResponse>(buildV3Url(`${url}network/${networkId}`, apiKey), accessToken);
    },
    getAlternativeNames: async (networkId: number) => {
      return client.get<NetworksGetAlternativeNamesResponse>(buildV3Url(`${url}network/${networkId}/alternative_names`, apiKey), accessToken);
    },
    getImages: async (networkId: number) => {
      return client.get<NetworksGetImagesResponse>(buildV3Url(`${url}network/${networkId}/images`, apiKey), accessToken);
    },
  };
};
