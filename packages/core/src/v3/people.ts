import { Credentials, Http, ITMDBAPI, PeopleAppendToResponse } from "..";
import { PeopleGetChangesResponse } from "../types/v3/people/get-changes";
import { PeopleGetCombinedCreditsResponse } from "../types/v3/people/get-combined-credits";
import { PeopleGetDetailsParams, PeopleGetDetailsResponse } from "../types/v3/people/get-details";
import { PeopleGetExternalIdsResponse } from "../types/v3/people/get-external-ids";
import { PeopleGetImagesResponse } from "../types/v3/people/get-images";
import { PeopleGetLatestResponse } from "../types/v3/people/get-latest";
import { PeopleGetMovieCreditsResponse } from "../types/v3/people/get-movie-credits";
import { PeopleGetPopularResponse } from "../types/v3/people/get-popular";
import { PeopleGetTaggedImagesResponse } from "../types/v3/people/get-tagged-images";
import { PeopleGetTranslationsResponse } from "../types/v3/people/get-translations";
import { PeopleGetTvCreditsResponse } from "../types/v3/people/get-tv-credits";
import { buildV3Url } from "../utils/api";

export const createV3PeopleMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["people"] => {
  return {
    getDetails: async <T extends PeopleAppendToResponse[]>(personId: number, params?: PeopleGetDetailsParams<T>) => {
      return client.get<PeopleGetDetailsResponse<T>>(buildV3Url(`${url}person/${personId}`, apiKey, params), accessToken);
    },
    getChanges: async (personId, params) => {
      return client.get<PeopleGetChangesResponse>(buildV3Url(`${url}person/${personId}/changes`, apiKey, params), accessToken);
    },
    getMovieCredits: async (personId, params) => {
      return client.get<PeopleGetMovieCreditsResponse>(buildV3Url(`${url}person/${personId}/movie_credits`, apiKey, params), accessToken);
    },
    getTVCredits: async (personId, params) => {
      return client.get<PeopleGetTvCreditsResponse>(buildV3Url(`${url}person/${personId}/tv_credits`, apiKey, params), accessToken);
    },
    getCombinedCredits: async (personId, params) => {
      return client.get<PeopleGetCombinedCreditsResponse>(buildV3Url(`${url}person/${personId}/combined_credits`, apiKey, params), accessToken);
    },
    getExternalIds: async (personId) => {
      return client.get<PeopleGetExternalIdsResponse>(buildV3Url(`${url}person/${personId}/external_ids`, apiKey), accessToken);
    },
    getImages: async (personId) => {
      return client.get<PeopleGetImagesResponse>(buildV3Url(`${url}person/${personId}/images`, apiKey), accessToken);
    },
    getTaggedImages: async (personId, params) => {
      return client.get<PeopleGetTaggedImagesResponse>(buildV3Url(`${url}person/${personId}/tagged_images`, apiKey, params), accessToken);
    },
    getTranslations: async (personId, params) => {
      return client.get<PeopleGetTranslationsResponse>(buildV3Url(`${url}person/${personId}/translations`, apiKey, params), accessToken);
    },
    getLatest: async (params) => {
      return client.get<PeopleGetLatestResponse>(buildV3Url(`${url}person/latest`, apiKey, params), accessToken);
    },
    getPopular: async (params) => {
      return client.get<PeopleGetPopularResponse>(buildV3Url(`${url}person/popular`, apiKey, params), accessToken);
    },
  };
};
