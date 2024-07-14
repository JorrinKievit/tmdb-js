import { Credentials, Http, ITMDBAPI } from "..";
import { AccountAddToWatchlistResponse } from "../types/v3/account/add-to-watchlist";
import { AccountGetCreatedListsResponse } from "../types/v3/account/get-created-lists";
import { AccountGetDetailsResponse } from "../types/v3/account/get-details";
import { AccountGetFavoriteMoviesResponse } from "../types/v3/account/get-favorite-movies";
import { AccountGetFavoriteTVShowsResponse } from "../types/v3/account/get-favorite-tvshows";
import { AccountGetMovieWatchlistResponse } from "../types/v3/account/get-movie-watchlist";
import { AccountGetRatedMoviesResponse } from "../types/v3/account/get-rated-movies";
import { AccountGetRatedTVEpisodesResponse } from "../types/v3/account/get-rated-tvepisodes";
import { AccountGetRatedTVShowsResponse } from "../types/v3/account/get-rated-tvshows";
import { AccountGetTVShowWatchlistResponse } from "../types/v3/account/get-tvshow-watchlist";
import { AccountMarkAsFavoriteResponse } from "../types/v3/account/mark-as-favorite";
import { buildV3Url } from "../utils/api";

const getAccountUrlWithId = (url: string, account_id?: number): string => {
  let formattedUrl = url;

  if (account_id) {
    formattedUrl = formattedUrl.replace("{account_id}", account_id.toString());
  } else {
    formattedUrl = formattedUrl.replace("/{account_id}", "");
  }

  return formattedUrl;
};

export const createV3AccountMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["account"] => {
  return {
    getDetails: async (params) => {
      return client.get<AccountGetDetailsResponse>(buildV3Url(`${apiUrl}account`, apiKey, params), accessToken);
    },
    getCreatedLists: async (params, accountId) => {
      return client.get<AccountGetCreatedListsResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/lists`, accountId), apiKey, params), accessToken);
    },
    getFavoriteMovies: async (params, accountId) => {
      return client.get<AccountGetFavoriteMoviesResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite/movies`, accountId), apiKey, params), accessToken);
    },
    getFavoriteTVShows: async (params, accountId) => {
      return client.get<AccountGetFavoriteTVShowsResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite/tv`, accountId), apiKey, params), accessToken);
    },
    markAsFavorite: async (params, body, accountId) => {
      return client.post<AccountMarkAsFavoriteResponse, typeof body>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite`, accountId), apiKey, params), body, accessToken);
    },
    getRatedMovies: async (params, accountId) => {
      return client.get<AccountGetRatedMoviesResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/movies`, accountId), apiKey, params), accessToken);
    },
    getRatedTVShows: async (params, accountId) => {
      return client.get<AccountGetRatedTVShowsResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/tv`, accountId), apiKey, params), accessToken);
    },
    getRatedTVEpisodes: async (params, accountId) => {
      return client.get<AccountGetRatedTVEpisodesResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/tv/episodes`, accountId), apiKey, params), accessToken);
    },
    getMovieWatchlist: async (params, accountId) => {
      return client.get<AccountGetMovieWatchlistResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist/movies`, accountId), apiKey, params), accessToken);
    },
    getTVShowWatchlist: async (params, accountId) => {
      return client.get<AccountGetTVShowWatchlistResponse>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist/tv`, accountId), apiKey, params), accessToken);
    },
    addToWatchlist: async (params, body, accountId) => {
      return client.post<AccountAddToWatchlistResponse, typeof body>(buildV3Url(getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist`, accountId), apiKey, params), body, accessToken);
    },
  };
};
