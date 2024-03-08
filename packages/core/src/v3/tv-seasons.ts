import {Http, ITMDBAPI, TVSeasonsAppendToResponse} from "..";
import {TVSeasonsGetAccountStatesResponse} from "../types/v3/tv-seasons/get-account-states";
import {TVSeasonsGetAggregateCreditsResponse} from "../types/v3/tv-seasons/get-aggregate-credits";
import {TVSeasonsGetChangesResponse} from "../types/v3/tv-seasons/get-changes";
import {TVSeasonsGetCreditsResponse} from "../types/v3/tv-seasons/get-credits";
import {TVSeasonsGetDetailsParams, TVSeasonsGetDetailsResponse} from "../types/v3/tv-seasons/get-details";
import {TVSeasonsGetExternalIDsResponse} from "../types/v3/tv-seasons/get-external-ids";
import {TVSeasonsGetImagesResponse} from "../types/v3/tv-seasons/get-images";
import {TVSeasonsGetTranslationsResponse} from "../types/v3/tv-seasons/get-translations";
import {TVSeasonsGetVideosResponse} from "../types/v3/tv-seasons/get-videos";
import {buildV3Url} from "../utils/api";

export const createV3TVSeasonsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["tvSeasons"] => {
    return {
        getDetails: async <T extends TVSeasonsAppendToResponse[]>(tvId: number, seasonNumber: number, params?: TVSeasonsGetDetailsParams<T>) => {
            const res = await client.get<TVSeasonsGetDetailsResponse<T>>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}`, params));

            return res;
        },
        getAccountStates: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetAccountStatesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/account_states`, params));

            return res;
        },
        getAggregateCredits: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetAggregateCreditsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/aggregate_credits`, params));

            return res;
        },
        getChanges: async (seasonId, params) => {
            const res = await client.get<TVSeasonsGetChangesResponse>(buildV3Url(apiKey, `${url}tv/season/${seasonId}/changes`, params));

            return res;
        },
        getCredits: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetCreditsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/credits`, params));

            return res;
        },
        getExternalIds: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetExternalIDsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/external_ids`, params));

            return res;
        },
        getImages: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetImagesResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/images`, params));

            return res;
        },
        getTranslations: async (tvId, seasonNumber) => {
            const res = await client.get<TVSeasonsGetTranslationsResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/translations`));

            return res;
        },
        getVideos: async (tvId, seasonNumber, params) => {
            const res = await client.get<TVSeasonsGetVideosResponse>(buildV3Url(apiKey, `${url}tv/${tvId}/season/${seasonNumber}/videos`, params));

            return res;
        },
    };
};
