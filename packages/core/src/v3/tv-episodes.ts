import { Http, ITMDBAPI } from "..";
import { TVEpisodesDeleteRatingResponse } from "../types/v3/tv-episodes/delete-rating";
import { TVEpisodesGetAccountStatesResponse } from "../types/v3/tv-episodes/get-account-states";
import { TVEpisodesGetChangesResponse } from "../types/v3/tv-episodes/get-changes";
import { TVEpisodesGetCreditsResponse } from "../types/v3/tv-episodes/get-credits";
import { TVEpisodesGetDetailsResponse } from "../types/v3/tv-episodes/get-details";
import { TVEpisodesGetImagesResponse } from "../types/v3/tv-episodes/get-images";
import { TVEpisodesGetTranslationsResponse } from "../types/v3/tv-episodes/get-translations";
import { TVEpisodesGetVideosResponse } from "../types/v3/tv-episodes/get-videos";
import { TVEpisodesRateTVEpisodeResponse } from "../types/v3/tv-episodes/rate-tv-episode";
import { buildV3Url } from "../utils/api";

export const createV3TVEpisodesMethods = (
  client: Http,
  apiKey: string,
  url: string
): ITMDBAPI["v3"]["tvEpisodes"] => {
  return {
    getDetails: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.get<TVEpisodesGetDetailsResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}`,
          params
        )
      );

      return res;
    },
    getAccountStates: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.get<TVEpisodesGetAccountStatesResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/account_states`,
          params
        )
      );

      return res;
    },
    getChanges: async (episodeId, params) => {
      const res = await client.get<TVEpisodesGetChangesResponse>(
        buildV3Url(apiKey, `${url}tv/episode/${episodeId}/changes`, params)
      );

      return res;
    },
    getCredits: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.get<TVEpisodesGetCreditsResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/credits`,
          params
        )
      );

      return res;
    },
    getExternalIds: async (tvId, seasonNumber, episodeNumber) => {
      const res = await client.get<TVEpisodesGetDetailsResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/external_ids`
        )
      );

      return res;
    },
    getImages: async (tvId, seasonNumber, episodeNumber) => {
      const res = await client.get<TVEpisodesGetImagesResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/images`
        )
      );

      return res;
    },
    getTranslations: async (tvId, seasonNumber, episodeNumber) => {
      const res = await client.get<TVEpisodesGetTranslationsResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/translations`
        )
      );

      return res;
    },
    rateTVEpisode: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.post<TVEpisodesRateTVEpisodeResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
          params
        )
      );

      return res;
    },
    deleteRating: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.delete<TVEpisodesDeleteRatingResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
          params
        )
      );

      return res;
    },
    getVideos: async (tvId, seasonNumber, episodeNumber, params) => {
      const res = await client.get<TVEpisodesGetVideosResponse>(
        buildV3Url(
          apiKey,
          `${url}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/videos`,
          params
        )
      );

      return res;
    },
  };
};
