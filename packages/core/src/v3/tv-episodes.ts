import { Credentials, Http, ITMDBAPI, TVEpisodesAppendToResponse, TVEpisodesGetExternalIDsResponse } from "..";
import { TVEpisodesDeleteRatingResponse } from "../types/v3/tv-episodes/delete-rating";
import { TVEpisodesGetAccountStatesResponse } from "../types/v3/tv-episodes/get-account-states";
import { TVEpisodesGetChangesResponse } from "../types/v3/tv-episodes/get-changes";
import { TVEpisodesGetCreditsResponse } from "../types/v3/tv-episodes/get-credits";
import { TVEpisodesGetDetailsParams, TVEpisodesGetDetailsResponse } from "../types/v3/tv-episodes/get-details";
import { TVEpisodesGetImagesResponse } from "../types/v3/tv-episodes/get-images";
import { TVEpisodesGetTranslationsResponse } from "../types/v3/tv-episodes/get-translations";
import { TVEpisodesGetVideosResponse } from "../types/v3/tv-episodes/get-videos";
import { TVEpisodesRateTVEpisodeResponse } from "../types/v3/tv-episodes/rate-tv-episode";
import { buildV3Url } from "../utils/api";

export const createV3TVEpisodesMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["tvEpisodes"] => {
  return {
    getDetails: async <T extends TVEpisodesAppendToResponse[]>(tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetDetailsParams<T>) => {
      return client.get<TVEpisodesGetDetailsResponse<T>>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}`, apiKey, params), accessToken);
    },
    getAccountStates: async (tvId, seasonNumber, episodeNumber, params) => {
      return client.get<TVEpisodesGetAccountStatesResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/account_states`, apiKey, params), accessToken);
    },
    getChanges: async (episodeId, params) => {
      return client.get<TVEpisodesGetChangesResponse>(buildV3Url(`${url}tv/episode/${episodeId}/changes`, apiKey, params), accessToken);
    },
    getCredits: async (tvId, seasonNumber, episodeNumber, params) => {
      return client.get<TVEpisodesGetCreditsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/credits`, apiKey, params), accessToken);
    },
    getExternalIds: async (tvId, seasonNumber, episodeNumber) => {
      return client.get<TVEpisodesGetExternalIDsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/external_ids`, apiKey), accessToken);
    },
    getImages: async (tvId, seasonNumber, episodeNumber) => {
      return client.get<TVEpisodesGetImagesResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/images`, apiKey), accessToken);
    },
    getTranslations: async (tvId, seasonNumber, episodeNumber) => {
      return client.get<TVEpisodesGetTranslationsResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/translations`, apiKey), accessToken);
    },
    rateTVEpisode: async (tvId, seasonNumber, episodeNumber, params) => {
      return client.post<TVEpisodesRateTVEpisodeResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`, apiKey, params), undefined, accessToken);
    },
    deleteRating: async (tvId, seasonNumber, episodeNumber, params) => {
      return client.delete<TVEpisodesDeleteRatingResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`, apiKey, params), undefined, accessToken);
    },
    getVideos: async (tvId, seasonNumber, episodeNumber, params) => {
      return client.get<TVEpisodesGetVideosResponse>(buildV3Url(`${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/videos`, apiKey, params), accessToken);
    },
  };
};
