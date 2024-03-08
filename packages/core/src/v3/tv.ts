import {Http, ITMDBAPI, TVAppendToResponse} from "..";
import {TVDeleteRatingResponse} from "../types/v3/tv/delete-rating";
import {TVGetAccountStatesResponse} from "../types/v3/tv/get-account-states";
import {TVGetAggregateCreditsResponse} from "../types/v3/tv/get-aggregate-credits";
import {TVGetAlternativeTitlesResponse} from "../types/v3/tv/get-alternative-titles";
import {TVGetChangesResponse} from "../types/v3/tv/get-changes";
import {TVGetContentRatingsResponse} from "../types/v3/tv/get-content-ratings";
import {TVGetCreditsResponse} from "../types/v3/tv/get-credits";
import {TVGetDetailsParams, TVGetDetailsResponse} from "../types/v3/tv/get-details";
import {TVGetEpisodeGroupsResponse} from "../types/v3/tv/get-episode-groups";
import {TVGetExternalIdsResponse} from "../types/v3/tv/get-external-ids";
import {TVGetImagesResponse} from "../types/v3/tv/get-images";
import {TVGetKeywordsResponse} from "../types/v3/tv/get-keywords";
import {TVGetLatestResponse} from "../types/v3/tv/get-latest";
import {TVGetPopularResponse} from "../types/v3/tv/get-popular";
import {TVGetRecommendationsResponse} from "../types/v3/tv/get-recommendations";
import {TVGetReviewsResponse} from "../types/v3/tv/get-reviews";
import {TVGetScreenedTheatricallyResponse} from "../types/v3/tv/get-screened-theatrically";
import {TVGetSimilarTVShowsResponse} from "../types/v3/tv/get-similar-tvshows";
import {TVGetTopRatedResponse} from "../types/v3/tv/get-top-rated";
import {TVGetTranslationsResponse} from "../types/v3/tv/get-translations";
import {TVGetTVAiringTodayResponse} from "../types/v3/tv/get-tv-airing-today";
import {TVGetTVOnTheAirResponse} from "../types/v3/tv/get-tv-on-the-air";
import {TVGetVideosResponse} from "../types/v3/tv/get-videos";
import {TVGetWatchProvidersResponse} from "../types/v3/tv/get-watch-providers";
import {TVRateTVShowsResponse} from "../types/v3/tv/rate-tvshows";
import {buildV3Url} from "../utils/api";

export const createV3TvMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["tv"] => {
    return {
        getDetails: async <T extends TVAppendToResponse[]>(tvId: number, params?: TVGetDetailsParams<T>) => {
            const res = await client.get<TVGetDetailsResponse<T>>(buildV3Url(apiKey, `${url}tv/${tvId}`, params));

            return res;
        },
        getAccountStates: async (tvId, params) => {
            const res = await client.get<TVGetAccountStatesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/account_states`, params));

            return res;
        },
        getAggregateCredits: async (tvId, params) => {
            const res = await client.get<TVGetAggregateCreditsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/aggregate_credits`, params));

            return res;
        },
        getAlternativeTitles: async (tvId, params) => {
            const res = await client.get<TVGetAlternativeTitlesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/alternative_titles`, params));

            return res;
        },
        getChanges: async (tvId, params) => {
            const res = await client.get<TVGetChangesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/changes`, params));

            return res;
        },
        getContentRatings: async (tvId, params) => {
            const res = await client.get<TVGetContentRatingsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/content_ratings`, params));

            return res;
        },
        getCredits: async (tvId, params) => {
            const res = await client.get<TVGetCreditsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/credits`, params));

            return res;
        },
        getEpisodeGroups: async (tvId, params) => {
            const res = await client.get<TVGetEpisodeGroupsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/episode_groups`, params));

            return res;
        },
        getExternalIds: async (tvId, params) => {
            const res = await client.get<TVGetExternalIdsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/external_ids`, params));

            return res;
        },
        getImages: async (tvId, params) => {
            const res = await client.get<TVGetImagesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/images`, params));

            return res;
        },
        getKeywords: async (tvId) => {
            const res = await client.get<TVGetKeywordsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/keywords`));

            return res;
        },
        getRecommendations: async (tvId, params) => {
            const res = await client.get<TVGetRecommendationsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/recommendations`, params));

            return res;
        },
        getReviews: async (tvId, params) => {
            const res = await client.get<TVGetReviewsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/reviews`, params));

            return res;
        },
        getScreenedTheatrically: async (tvId, params) => {
            const res = await client.get<TVGetScreenedTheatricallyResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/screened_theatrically`, params));

            return res;
        },
        getSimilarTVShows: async (tvId, params) => {
            const res = await client.get<TVGetSimilarTVShowsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/similar`, params));

            return res;
        },
        getTranslations: async (tvId) => {
            const res = await client.get<TVGetTranslationsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/translations`));

            return res;
        },
        getVideos: async (tvId, params) => {
            const res = await client.get<TVGetVideosResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/videos`, params));

            return res;
        },
        getWatchProviders: async (tvId) => {
            const res = await client.get<TVGetWatchProvidersResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/watch/providers`));

            return res;
        },
        rateTVShow: async (tvId, body, params) => {
            const res = await client.post<TVRateTVShowsResponse, typeof body>(buildV3Url(apiKey, `${url}tv/${tvId}/rating`, params), body);

            return res;
        },
        deleteRating: async (tvId, params) => {
            const res = await client.delete<TVDeleteRatingResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/rating`, params));

            return res;
        },
        getLatest: async (params) => {
            const res = await client.get<TVGetLatestResponse>(buildV3Url(apiKey, `${url}tv/latest`, params));

            return res;
        },
        getTVAiringToday: async (params) => {
            const res = await client.get<TVGetTVAiringTodayResponse>(buildV3Url(apiKey, `${url}tv/airing_today`, params));

            return res;
        },
        getTVOnTheAir: async (params) => {
            const res = await client.get<TVGetTVOnTheAirResponse>(buildV3Url(apiKey, `${url}tv/on_the_air`, params));

            return res;
        },
        getPopular: async (params) => {
            const res = await client.get<TVGetPopularResponse>(buildV3Url(apiKey, `${url}tv/popular`, params));

            return res;
        },
        getTopRated: async (params) => {
            const res = await client.get<TVGetTopRatedResponse>(buildV3Url(apiKey, `${url}tv/top_rated`, params));

            return res;
        },
    };
};
