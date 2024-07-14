import { Credentials, Http, ITMDBAPI } from "..";
import { MoviesAppendToResponse } from "../types/append-to-response";
import { MoviesDeleteRatingResponse } from "../types/v3/movies/delete-rating";
import { MoviesGetAccountStatesResponse } from "../types/v3/movies/get-account-states";
import { MoviesGetAlternativeTitlesResponse } from "../types/v3/movies/get-alternative-titles";
import { MoviesGetChangesResponse } from "../types/v3/movies/get-changes";
import { MoviesGetCreditsResponse } from "../types/v3/movies/get-credits";
import { MoviesGetDetailsParams, MoviesGetDetailsResponse } from "../types/v3/movies/get-details";
import { MoviesGetExternalIdsResponse } from "../types/v3/movies/get-external-ids";
import { MoviesGetImagesResponse } from "../types/v3/movies/get-images";
import { MoviesGetKeywordsResponse } from "../types/v3/movies/get-keywords";
import { MoviesGetLatestResponse } from "../types/v3/movies/get-latest";
import { MoviesGetListsResponse } from "../types/v3/movies/get-lists";
import { MoviesGetNowPlayingResponse } from "../types/v3/movies/get-now-playing";
import { MoviesGetPopularResponse } from "../types/v3/movies/get-popular";
import { MoviesGetRecommendationsResponse } from "../types/v3/movies/get-recommendations";
import { MoviesGetReleaseDatesResponse } from "../types/v3/movies/get-release-dates";
import { MoviesGetReviewsResponse } from "../types/v3/movies/get-reviews";
import { MoviesGetSimilarMoviesResponse } from "../types/v3/movies/get-similar-movies";
import { MoviesGetTopRatedResponse } from "../types/v3/movies/get-top-rated";
import { MoviesGetTranslationsResponse } from "../types/v3/movies/get-translations";
import { MoviesGetUpcomingResponse } from "../types/v3/movies/get-upcoming";
import { MoviesGetVideosResponse } from "../types/v3/movies/get-videos";
import { MoviesGetWatchProvidersResponse } from "../types/v3/movies/get-watch-providers";
import { MoviesRateMovieResponse } from "../types/v3/movies/rate-movie";
import { buildV3Url } from "../utils/api";

export const createV3MoviesMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["movies"] => {
  return {
    getDetails: async <T extends MoviesAppendToResponse[]>(movieId: number, params?: MoviesGetDetailsParams<T>) => {
      return client.get<MoviesGetDetailsResponse<T>>(buildV3Url(`${url}movie/${movieId}`, apiKey, params), accessToken);
    },
    getAccountStates: async (movieId, params) => {
      return client.get<MoviesGetAccountStatesResponse>(buildV3Url(`${url}movie/${movieId}/account_states`, apiKey, params), accessToken);
    },
    getAlternativeTitles: async (movieId, params) => {
      return client.get<MoviesGetAlternativeTitlesResponse>(buildV3Url(`${url}movie/${movieId}/alternative_titles`, apiKey, params), accessToken);
    },
    getChanges: async (movieId, params) => {
      return client.get<MoviesGetChangesResponse>(buildV3Url(`${url}movie/${movieId}/changes`, apiKey, params), accessToken);
    },
    getCredits: async (movieId, params) => {
      return client.get<MoviesGetCreditsResponse>(buildV3Url(`${url}movie/${movieId}/credits`, apiKey, params), accessToken);
    },
    getExternalIds: async (movieId) => {
      return client.get<MoviesGetExternalIdsResponse>(buildV3Url(`${url}movie/${movieId}/external_ids`, apiKey), accessToken);
    },
    getImages: async (movieId, params) => {
      return client.get<MoviesGetImagesResponse>(buildV3Url(`${url}movie/${movieId}/images`, apiKey, params), accessToken);
    },
    getKeywords: async (movieId) => {
      return client.get<MoviesGetKeywordsResponse>(buildV3Url(`${url}movie/${movieId}/keywords`, apiKey), accessToken);
    },
    getLists: async (movieId, params) => {
      return client.get<MoviesGetListsResponse>(buildV3Url(`${url}movie/${movieId}/lists`, apiKey, params), accessToken);
    },
    getRecommendations: async (movieId, params) => {
      return client.get<MoviesGetRecommendationsResponse>(buildV3Url(`${url}movie/${movieId}/recommendations`, apiKey, params), accessToken);
    },
    getReleaseDates: async (movieId) => {
      return client.get<MoviesGetReleaseDatesResponse>(buildV3Url(`${url}movie/${movieId}/release_dates`, apiKey), accessToken);
    },
    getReviews: async (movieId, params) => {
      return client.get<MoviesGetReviewsResponse>(buildV3Url(`${url}movie/${movieId}/reviews`, apiKey, params), accessToken);
    },
    getSimilarMovies: async (movieId, params) => {
      return client.get<MoviesGetSimilarMoviesResponse>(buildV3Url(`${url}movie/${movieId}/similar`, apiKey, params), accessToken);
    },
    getTranslations: async (movieId) => {
      return client.get<MoviesGetTranslationsResponse>(buildV3Url(`${url}movie/${movieId}/translations`, apiKey), accessToken);
    },
    getVideos: async (movieId, params) => {
      return client.get<MoviesGetVideosResponse>(buildV3Url(`${url}movie/${movieId}/videos`, apiKey, params), accessToken);
    },
    getWatchProviders: async (movieId) => {
      return client.get<MoviesGetWatchProvidersResponse>(buildV3Url(`${url}movie/${movieId}/watch/providers`, apiKey), accessToken);
    },
    rateMovie: async (movieId, body, params) => {
      return client.post<MoviesRateMovieResponse, typeof body>(buildV3Url(`${url}movie/${movieId}/rating`, apiKey, params), body, accessToken);
    },
    deleteRating: async (movieId, params) => {
      return client.delete<MoviesDeleteRatingResponse>(buildV3Url(`${url}movie/${movieId}/rating`, apiKey, params), undefined, accessToken);
    },
    getLatest: async () => {
      return client.get<MoviesGetLatestResponse>(buildV3Url(`${url}movie/latest`, apiKey), accessToken);
    },
    getNowPlaying: async (params) => {
      return client.get<MoviesGetNowPlayingResponse>(buildV3Url(`${url}movie/now_playing`, apiKey, params), accessToken);
    },
    getPopular: async (params) => {
      return client.get<MoviesGetPopularResponse>(buildV3Url(`${url}movie/popular`, apiKey, params), accessToken);
    },
    getTopRated: async (params) => {
      return client.get<MoviesGetTopRatedResponse>(buildV3Url(`${url}movie/top_rated`, apiKey, params), accessToken);
    },
    getUpcoming: async (params) => {
      return client.get<MoviesGetUpcomingResponse>(buildV3Url(`${url}movie/upcoming`, apiKey, params), accessToken);
    },
  };
};
