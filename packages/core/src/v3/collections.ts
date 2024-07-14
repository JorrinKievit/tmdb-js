import { Credentials, Http, ITMDBAPI } from "..";
import { CollectionsGetDetailsResponse } from "../types/v3/collections/get-details";
import { CollectionsGetImagesResponse } from "../types/v3/collections/get-images";
import { CollectionsGetTranslationsResponse } from "../types/v3/collections/get-translations";
import { buildV3Url } from "../utils/api";

export const createV3CollectionsMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["collections"] => {
  return {
    getDetails: async (collectionId, params) => {
      return client.get<CollectionsGetDetailsResponse>(buildV3Url(`${apiUrl}collection/${collectionId}`, apiKey, params), accessToken);
    },
    getImages: async (collectionId, params) => {
      return client.get<CollectionsGetImagesResponse>(buildV3Url(`${apiUrl}collection/${collectionId}/images`, apiKey, params), accessToken);
    },
    getTranslations: async (collectionId, params) => {
      return client.get<CollectionsGetTranslationsResponse>(buildV3Url(`${apiUrl}collection/${collectionId}/translations`, apiKey, params), accessToken);
    },
  };
};
