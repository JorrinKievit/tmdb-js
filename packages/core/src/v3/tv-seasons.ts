import { Credentials, Http, ITMDBAPI, TVSeasonsAppendToResponse } from "..";
import { TVSeasonsGetAccountStatesResponse } from "../types/v3/tv-seasons/get-account-states";
import { TVSeasonsGetAggregateCreditsResponse } from "../types/v3/tv-seasons/get-aggregate-credits";
import { TVSeasonsGetChangesResponse } from "../types/v3/tv-seasons/get-changes";
import { TVSeasonsGetCreditsResponse } from "../types/v3/tv-seasons/get-credits";
import { TVSeasonsGetDetailsParams, TVSeasonsGetDetailsResponse } from "../types/v3/tv-seasons/get-details";
import { TVSeasonsGetExternalIDsResponse } from "../types/v3/tv-seasons/get-external-ids";
import { TVSeasonsGetImagesResponse } from "../types/v3/tv-seasons/get-images";
import { TVSeasonsGetTranslationsResponse } from "../types/v3/tv-seasons/get-translations";
import { TVSeasonsGetVideosResponse } from "../types/v3/tv-seasons/get-videos";
import { buildV3Url } from "../utils/api";

export const createV3TVSeasonsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["tvSeasons"] => {
  return {
    getDetails: async <T extends TVSeasonsAppendToResponse[]>(tvId: number, seasonNumber: number, params?: TVSeasonsGetDetailsParams<T>) => {
      return client.get<TVSeasonsGetDetailsResponse<T>>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}`, apiKey, params), accessToken);
    },
    getAccountStates: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetAccountStatesResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/account_states`, apiKey, params), accessToken);
    },
    getAggregateCredits: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetAggregateCreditsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/aggregate_credits`, apiKey, params), accessToken);
    },
    getChanges: async (seasonId, params) => {
      return client.get<TVSeasonsGetChangesResponse>(buildV3Url(`${url}tv/season/${seasonId}/changes`, apiKey, params), accessToken);
    },
    getCredits: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetCreditsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/credits`, apiKey, params), accessToken);
    },
    getExternalIds: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetExternalIDsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/external_ids`, apiKey, params), accessToken);
    },
    getImages: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetImagesResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/images`, apiKey, params), accessToken);
    },
    getTranslations: async (tvId, seasonNumber) => {
      return client.get<TVSeasonsGetTranslationsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/translations`, apiKey), accessToken);
    },
    getVideos: async (tvId, seasonNumber, params) => {
      return client.get<TVSeasonsGetVideosResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/videos`, apiKey, params), accessToken);
    },
  };
};
