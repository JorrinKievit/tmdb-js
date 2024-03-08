import { Http, V4IAccount } from "..";
import { V4AccountGetFavoriteMoviesResponse } from "../types/v4/account/get-favorite-movies";
import { V4AccountGetFavoriteTVShowsResponse } from "../types/v4/account/get-favorite-tvshows";
import { V4AccountGetListsResponse } from "../types/v4/account/get-lists";
import { V4AccountGetMovieRecommendationsResponse } from "../types/v4/account/get-movie-recommendations";
import { V4AccountGetMovieWatchlistResponse } from "../types/v4/account/get-movie-watchlist";
import { V4AccountGetRatedMoviesResponse } from "../types/v4/account/get-rated-movies";
import { V4AccountGetRatedTVShowsResponse } from "../types/v4/account/get-rated-tvshows";
import { V4AccountGetTVShowRecommendationsResponse } from "../types/v4/account/get-tvshow-recommendations";
import { V4AccountGetTVShowWatchlistResponse } from "../types/v4/account/get-tvshow-watchlist";
import { buildV4Url } from "../utils/api";
import { createV4Proxy } from "../utils/v4proxy";

export const createV4AccountMethods = (client: Http, apiUrl: string, accessToken?: string): V4IAccount => {
  const accountMethods: V4IAccount = {
    getLists: async (accountId, params) => {
      const res = await client.get<V4AccountGetListsResponse>(buildV4Url(`${apiUrl}account/${accountId}/lists`, params), accessToken);

      return res;
    },
    getFavoriteMovies: async (accountId, params) => {
      const res = await client.get<V4AccountGetFavoriteMoviesResponse>(buildV4Url(`${apiUrl}account/${accountId}/movie/favorites`, params), accessToken);

      return res;
    },
    getFavoriteTVShows: async (accountId, params) => {
      const res = await client.get<V4AccountGetFavoriteTVShowsResponse>(buildV4Url(`${apiUrl}account/${accountId}/tv/favorites`, params), accessToken);

      return res;
    },
    getMovieRecommendations: async (accountId, params) => {
      const res = await client.get<V4AccountGetMovieRecommendationsResponse>(buildV4Url(`${apiUrl}account/${accountId}/movie/recommendations`, params), accessToken);

      return res;
    },
    getTVShowRecommendations: async (accountId, params) => {
      const res = await client.get<V4AccountGetTVShowRecommendationsResponse>(buildV4Url(`${apiUrl}account/${accountId}/tv/recommendations`, params));

      return res;
    },
    getMovieWatchlist: async (accountId, params) => {
      const res = await client.get<V4AccountGetMovieWatchlistResponse>(buildV4Url(`${apiUrl}account/${accountId}/movie/watchlist`, params), accessToken);

      return res;
    },
    getTVShowWatchlist: async (accountId, params) => {
      const res = await client.get<V4AccountGetTVShowWatchlistResponse>(buildV4Url(`${apiUrl}account/${accountId}/tv/watchlist`, params), accessToken);

      return res;
    },
    getRatedMovies: async (accountId, params) => {
      const res = await client.get<V4AccountGetRatedMoviesResponse>(buildV4Url(`${apiUrl}account/${accountId}/movie/rated`, params), accessToken);

      return res;
    },
    getRatedTVShows: async (accountId, params) => {
      const res = await client.get<V4AccountGetRatedTVShowsResponse>(buildV4Url(`${apiUrl}account/${accountId}/tv/rated`, params), accessToken);

      return res;
    },
  };

  const accountMethodsProxy = createV4Proxy(accountMethods, accessToken);
  return accountMethodsProxy;
};
