import { Credentials, Http, ITMDBAPI, TVAppendToResponse } from "..";
import { TVDeleteRatingResponse } from "../types/v3/tv/delete-rating";
import { TVGetAccountStatesResponse } from "../types/v3/tv/get-account-states";
import { TVGetAggregateCreditsResponse } from "../types/v3/tv/get-aggregate-credits";
import { TVGetAlternativeTitlesResponse } from "../types/v3/tv/get-alternative-titles";
import { TVGetChangesResponse } from "../types/v3/tv/get-changes";
import { TVGetContentRatingsResponse } from "../types/v3/tv/get-content-ratings";
import { TVGetCreditsResponse } from "../types/v3/tv/get-credits";
import { TVGetDetailsParams, TVGetDetailsResponse } from "../types/v3/tv/get-details";
import { TVGetEpisodeGroupsResponse } from "../types/v3/tv/get-episode-groups";
import { TVGetExternalIdsResponse } from "../types/v3/tv/get-external-ids";
import { TVGetImagesResponse } from "../types/v3/tv/get-images";
import { TVGetKeywordsResponse } from "../types/v3/tv/get-keywords";
import { TVGetLatestResponse } from "../types/v3/tv/get-latest";
import { TVGetPopularResponse } from "../types/v3/tv/get-popular";
import { TVGetRecommendationsResponse } from "../types/v3/tv/get-recommendations";
import { TVGetReviewsResponse } from "../types/v3/tv/get-reviews";
import { TVGetScreenedTheatricallyResponse } from "../types/v3/tv/get-screened-theatrically";
import { TVGetSimilarTVShowsResponse } from "../types/v3/tv/get-similar-tvshows";
import { TVGetTopRatedResponse } from "../types/v3/tv/get-top-rated";
import { TVGetTranslationsResponse } from "../types/v3/tv/get-translations";
import { TVGetTVAiringTodayResponse } from "../types/v3/tv/get-tv-airing-today";
import { TVGetTVOnTheAirResponse } from "../types/v3/tv/get-tv-on-the-air";
import { TVGetVideosResponse } from "../types/v3/tv/get-videos";
import { TVGetWatchProvidersResponse } from "../types/v3/tv/get-watch-providers";
import { TVRateTVShowsResponse } from "../types/v3/tv/rate-tvshows";
import { buildV3Url } from "../utils/api";

export const createV3TvMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["tv"] => {
  return {
    getDetails: async <T extends TVAppendToResponse[]>(tvId: number, params?: TVGetDetailsParams<T>) => {
      return client.get<TVGetDetailsResponse<T>>(buildV3Url(`${url}tv/${tvId}`, apiKey, params), accessToken);
    },
    getAccountStates: async (tvId, params) => {
      return client.get<TVGetAccountStatesResponse>(buildV3Url(`${url}tv/${tvId}/account_states`, apiKey, params), accessToken);
    },
    getAggregateCredits: async (tvId, params) => {
      return client.get<TVGetAggregateCreditsResponse>(buildV3Url(`${url}tv/${tvId}/aggregate_credits`, apiKey, params), accessToken);
    },
    getAlternativeTitles: async (tvId, params) => {
      return client.get<TVGetAlternativeTitlesResponse>(buildV3Url(`${url}tv/${tvId}/alternative_titles`, apiKey, params), accessToken);
    },
    getChanges: async (tvId, params) => {
      return client.get<TVGetChangesResponse>(buildV3Url(`${url}tv/${tvId}/changes`, apiKey, params), accessToken);
    },
    getContentRatings: async (tvId, params) => {
      return client.get<TVGetContentRatingsResponse>(buildV3Url(`${url}tv/${tvId}/content_ratings`, apiKey, params), accessToken);
    },
    getCredits: async (tvId, params) => {
      return client.get<TVGetCreditsResponse>(buildV3Url(`${url}tv/${tvId}/credits`, apiKey, params), accessToken);
    },
    getEpisodeGroups: async (tvId, params) => {
      return client.get<TVGetEpisodeGroupsResponse>(buildV3Url(`${url}tv/${tvId}/episode_groups`, apiKey, params), accessToken);
    },
    getExternalIds: async (tvId, params) => {
      return client.get<TVGetExternalIdsResponse>(buildV3Url(`${url}tv/${tvId}/external_ids`, apiKey, params), accessToken);
    },
    getImages: async (tvId, params) => {
      return client.get<TVGetImagesResponse>(buildV3Url(`${url}tv/${tvId}/images`, apiKey, params), accessToken);
    },
    getKeywords: async (tvId) => {
      return client.get<TVGetKeywordsResponse>(buildV3Url(`${url}tv/${tvId}/keywords`, apiKey), accessToken);
    },
    getRecommendations: async (tvId, params) => {
      return client.get<TVGetRecommendationsResponse>(buildV3Url(`${url}tv/${tvId}/recommendations`, apiKey, params), accessToken);
    },
    getReviews: async (tvId, params) => {
      return client.get<TVGetReviewsResponse>(buildV3Url(`${url}tv/${tvId}/reviews`, apiKey, params), accessToken);
    },
    getScreenedTheatrically: async (tvId, params) => {
      return client.get<TVGetScreenedTheatricallyResponse>(buildV3Url(`${url}tv/${tvId}/screened_theatrically`, apiKey, params), accessToken);
    },
    getSimilarTVShows: async (tvId, params) => {
      return client.get<TVGetSimilarTVShowsResponse>(buildV3Url(`${url}tv/${tvId}/similar`, apiKey, params), accessToken);
    },
    getTranslations: async (tvId) => {
      return client.get<TVGetTranslationsResponse>(buildV3Url(`${url}tv/${tvId}/translations`, apiKey), accessToken);
    },
    getVideos: async (tvId, params) => {
      return client.get<TVGetVideosResponse>(buildV3Url(`${url}tv/${tvId}/videos`, apiKey, params), accessToken);
    },
    getWatchProviders: async (tvId) => {
      return client.get<TVGetWatchProvidersResponse>(buildV3Url(`${url}tv/${tvId}/watch/providers`, apiKey), accessToken);
    },
    rateTVShow: async (tvId, body, params) => {
      return client.post<TVRateTVShowsResponse, typeof body>(buildV3Url(`${url}tv/${tvId}/rating`, apiKey, params), body, accessToken);
    },
    deleteRating: async (tvId, params) => {
      return client.delete<TVDeleteRatingResponse>(buildV3Url(`${url}tv/${tvId}/rating`, apiKey, params), undefined, accessToken);
    },
    getLatest: async (params) => {
      return client.get<TVGetLatestResponse>(buildV3Url(`${url}tv/latest`, apiKey, params), accessToken);
    },
    getTVAiringToday: async (params) => {
      return client.get<TVGetTVAiringTodayResponse>(buildV3Url(`${url}tv/airing_today`, apiKey, params), accessToken);
    },
    getTVOnTheAir: async (params) => {
      return client.get<TVGetTVOnTheAirResponse>(buildV3Url(`${url}tv/on_the_air`, apiKey, params), accessToken);
    },
    getPopular: async (params) => {
      return client.get<TVGetPopularResponse>(buildV3Url(`${url}tv/popular`, apiKey, params), accessToken);
    },
    getTopRated: async (params) => {
      return client.get<TVGetTopRatedResponse>(buildV3Url(`${url}tv/top_rated`, apiKey, params), accessToken);
    },
  };
};
