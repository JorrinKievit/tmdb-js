import {Http, ITMDBAPI} from "..";
import {MoviesAppendToResponse} from "../types/append-to-response";
import {MoviesDeleteRatingResponse} from "../types/v3/movies/delete-rating";
import {MoviesGetAccountStatesResponse} from "../types/v3/movies/get-account-states";
import {MoviesGetAlternativeTitlesResponse} from "../types/v3/movies/get-alternative-titles";
import {MoviesGetChangesResponse} from "../types/v3/movies/get-changes";
import {MoviesGetCreditsResponse} from "../types/v3/movies/get-credits";
import {MoviesGetDetailsParams, MoviesGetDetailsResponse} from "../types/v3/movies/get-details";
import {MoviesGetExternalIdsResponse} from "../types/v3/movies/get-external-ids";
import {MoviesGetImagesResponse} from "../types/v3/movies/get-images";
import {MoviesGetKeywordsResponse} from "../types/v3/movies/get-keywords";
import {MoviesGetLatestResponse} from "../types/v3/movies/get-latest";
import {MoviesGetListsResponse} from "../types/v3/movies/get-lists";
import {MoviesGetNowPlayingResponse} from "../types/v3/movies/get-now-playing";
import {MoviesGetPopularResponse} from "../types/v3/movies/get-popular";
import {MoviesGetRecommendationsResponse} from "../types/v3/movies/get-recommendations";
import {MoviesGetReleaseDatesResponse} from "../types/v3/movies/get-release-dates";
import {MoviesGetReviewsResponse} from "../types/v3/movies/get-reviews";
import {MoviesGetSimilarMoviesResponse} from "../types/v3/movies/get-similar-movies";
import {MoviesGetTopRatedResponse} from "../types/v3/movies/get-top-rated";
import {MoviesGetTranslationsResponse} from "../types/v3/movies/get-translations";
import {MoviesGetUpcomingResponse} from "../types/v3/movies/get-upcoming";
import {MoviesGetVideosResponse} from "../types/v3/movies/get-videos";
import {MoviesGetWatchProvidersResponse} from "../types/v3/movies/get-watch-providers";
import {MoviesRateMovieResponse} from "../types/v3/movies/rate-movie";
import {buildV3Url} from "../utils/api";

export const createV3MoviesMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["movies"] => {
    return {
        getDetails: async <T extends MoviesAppendToResponse[]>(movieId: number, params?: MoviesGetDetailsParams<T>) => {
            const res = await client.get<MoviesGetDetailsResponse<T>>(buildV3Url(apiKey, `${url}movie/${movieId}`, params));

            return res;
        },
        getAccountStates: async (movieId, params) => {
            const res = await client.get<MoviesGetAccountStatesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/account_states`, params));

            return res;
        },
        getAlternativeTitles: async (movieId, params) => {
            const res = await client.get<MoviesGetAlternativeTitlesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/alternative_titles`, params));

            return res;
        },
        getChanges: async (movieId, params) => {
            const res = await client.get<MoviesGetChangesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/changes`, params));

            return res;
        },
        getCredits: async (movieId, params) => {
            const res = await client.get<MoviesGetCreditsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/credits`, params));

            return res;
        },
        getExternalIds: async (movieId) => {
            const res = await client.get<MoviesGetExternalIdsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/external_ids`));

            return res;
        },
        getImages: async (movieId, params) => {
            const res = await client.get<MoviesGetImagesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/images`, params));

            return res;
        },
        getKeywords: async (movieId) => {
            const res = await client.get<MoviesGetKeywordsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/keywords`));

            return res;
        },
        getLists: async (movieId, params) => {
            const res = await client.get<MoviesGetListsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/lists`, params));

            return res;
        },
        getRecommendations: async (movieId, params) => {
            const res = await client.get<MoviesGetRecommendationsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/recommendations`, params));

            return res;
        },
        getReleaseDates: async (movieId) => {
            const res = await client.get<MoviesGetReleaseDatesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/release_dates`));

            return res;
        },
        getReviews: async (movieId, params) => {
            const res = await client.get<MoviesGetReviewsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/reviews`, params));

            return res;
        },
        getSimilarMovies: async (movieId, params) => {
            const res = await client.get<MoviesGetSimilarMoviesResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/similar`, params));

            return res;
        },
        getTranslations: async (movieId) => {
            const res = await client.get<MoviesGetTranslationsResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/translations`));

            return res;
        },
        getVideos: async (movieId, params) => {
            const res = await client.get<MoviesGetVideosResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/videos`, params));

            return res;
        },
        getWatchProviders: async (movieId) => {
            const res = await client.get<MoviesGetWatchProvidersResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/watch/providers`));

            return res;
        },
        rateMovie: async (movieId, body, params) => {
            const res = await client.post<MoviesRateMovieResponse, typeof body>(buildV3Url(apiKey, `${url}movie/${movieId}/rating`, params), body);

            return res;
        },
        deleteRating: async (movieId, params) => {
            const res = await client.delete<MoviesDeleteRatingResponse>(buildV3Url(apiKey, `${url}movie/${movieId}/rating`, params));

            return res;
        },
        getLatest: async () => {
            const res = await client.get<MoviesGetLatestResponse>(buildV3Url(apiKey, `${url}movie/latest`));

            return res;
        },
        getNowPlaying: async (params) => {
            const res = await client.get<MoviesGetNowPlayingResponse>(buildV3Url(apiKey, `${url}movie/now_playing`, params));

            return res;
        },
        getPopular: async (params) => {
            const res = await client.get<MoviesGetPopularResponse>(buildV3Url(apiKey, `${url}movie/popular`, params));

            return res;
        },
        getTopRated: async (params) => {
            const res = await client.get<MoviesGetTopRatedResponse>(buildV3Url(apiKey, `${url}movie/top_rated`, params));

            return res;
        },
        getUpcoming: async (params) => {
            const res = await client.get<MoviesGetUpcomingResponse>(buildV3Url(apiKey, `${url}movie/upcoming`, params));

            return res;
        },
    };
};
