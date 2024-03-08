import { Http, ITMDBAPI } from "..";
import { CollectionsGetDetailsResponse } from "../types/v3/collections/get-details";
import { CollectionsGetImagesResponse } from "../types/v3/collections/get-images";
import { CollectionsGetTranslationsResponse } from "../types/v3/collections/get-translations";
import { buildV3Url } from "../utils/api";

export const createV3CollectionsMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["collections"] => {
  return {
    getDetails: async (collectionId, params) => {
      const res = await client.get<CollectionsGetDetailsResponse>(buildV3Url(apiKey, `${apiUrl}collection/${collectionId}`, params));

      return res;
    },
    getImages: async (collectionId, params) => {
      const res = await client.get<CollectionsGetImagesResponse>(buildV3Url(apiKey, `${apiUrl}collection/${collectionId}/images`, params));

      return res;
    },
    getTranslations: async (collectionId, params) => {
      const res = await client.get<CollectionsGetTranslationsResponse>(buildV3Url(apiKey, `${apiUrl}collection/${collectionId}/translations`, params));

      return res;
    },
  };
};
