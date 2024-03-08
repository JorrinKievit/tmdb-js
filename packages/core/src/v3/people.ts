import {Http, ITMDBAPI, PeopleAppendToResponse} from "..";
import {PeopleGetChangesResponse} from "../types/v3/people/get-changes";
import {PeopleGetCombinedCreditsResponse} from "../types/v3/people/get-combined-credits";
import {PeopleGetDetailsParams, PeopleGetDetailsResponse} from "../types/v3/people/get-details";
import {PeopleGetExternalIdsResponse} from "../types/v3/people/get-external-ids";
import {PeopleGetImagesResponse} from "../types/v3/people/get-images";
import {PeopleGetLatestResponse} from "../types/v3/people/get-latest";
import {PeopleGetMovieCreditsResponse} from "../types/v3/people/get-movie-credits";
import {PeopleGetPopularResponse} from "../types/v3/people/get-popular";
import {PeopleGetTaggedImagesResponse} from "../types/v3/people/get-tagged-images";
import {PeopleGetTranslationsResponse} from "../types/v3/people/get-translations";
import {PeopleGetTvCreditsResponse} from "../types/v3/people/get-tv-credits";
import {buildV3Url} from "../utils/api";

export const createV3PeopleMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["people"] => {
    return {
        getDetails: async <T extends PeopleAppendToResponse[]>(personId: number, params?: PeopleGetDetailsParams<T>) => {
            const res = await client.get<PeopleGetDetailsResponse<T>>(buildV3Url(apiKey, `${url}person/${personId}`, params));

            return res;
        },
        getChanges: async (personId, params) => {
            const res = await client.get<PeopleGetChangesResponse>(buildV3Url(apiKey, `${url}person/${personId}/changes`, params));

            return res;
        },
        getMovieCredits: async (personId, params) => {
            const res = await client.get<PeopleGetMovieCreditsResponse>(buildV3Url(apiKey, `${url}person/${personId}/movie_credits`, params));

            return res;
        },
        getTVCredits: async (personId, params) => {
            const res = await client.get<PeopleGetTvCreditsResponse>(buildV3Url(apiKey, `${url}person/${personId}/tv_credits`, params));

            return res;
        },
        getCombinedCredits: async (personId, params) => {
            const res = await client.get<PeopleGetCombinedCreditsResponse>(buildV3Url(apiKey, `${url}person/${personId}/combined_credits`, params));

            return res;
        },
        getExternalIds: async (personId) => {
            const res = await client.get<PeopleGetExternalIdsResponse>(buildV3Url(apiKey, `${url}person/${personId}/external_ids`));

            return res;
        },
        getImages: async (personId) => {
            const res = await client.get<PeopleGetImagesResponse>(buildV3Url(apiKey, `${url}person/${personId}/images`));

            return res;
        },
        getTaggedImages: async (personId, params) => {
            const res = await client.get<PeopleGetTaggedImagesResponse>(buildV3Url(apiKey, `${url}person/${personId}/tagged_images`, params));

            return res;
        },
        getTranslations: async (personId, params) => {
            const res = await client.get<PeopleGetTranslationsResponse>(buildV3Url(apiKey, `${url}person/${personId}/translations`, params));

            return res;
        },
        getLatest: async (params) => {
            const res = await client.get<PeopleGetLatestResponse>(buildV3Url(apiKey, `${url}person/latest`, params));

            return res;
        },
        getPopular: async (params) => {
            const res = await client.get<PeopleGetPopularResponse>(buildV3Url(apiKey, `${url}person/popular`, params));

            return res;
        },
    };
};
