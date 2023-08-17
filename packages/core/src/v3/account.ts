import { Http, ITMDBAPI } from "..";
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

export const createV3AccountMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["account"] => {
  return {
    getDetails: async (params) => {
      const res = await client.get<AccountGetDetailsResponse>(buildV3Url(apiKey, `${apiUrl}account`, params));
      return res;
    },
    getCreatedLists: async (params, accountId) => {
      const res = await client.get<AccountGetCreatedListsResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/lists`, accountId), params));

      return res;
    },
    getFavoriteMovies: async (params, accountId) => {
      const res = await client.get<AccountGetFavoriteMoviesResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite/movies`, accountId), params));

      return res;
    },
    getFavoriteTVShows: async (params, accountId) => {
      const res = await client.get<AccountGetFavoriteTVShowsResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite/tv`, accountId), params));

      return res;
    },
    markAsFavorite: async (params, body, accountId) => {
      const res = await client.post<AccountMarkAsFavoriteResponse, typeof body>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/favorite`, accountId), params), body);

      return res;
    },
    getRatedMovies: async (params, accountId) => {
      const res = await client.get<AccountGetRatedMoviesResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/movies`, accountId), params));

      return res;
    },
    getRatedTVShows: async (params, accountId) => {
      const res = await client.get<AccountGetRatedTVShowsResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/tv`, accountId), params));

      return res;
    },
    getRatedTVEpisodes: async (params, accountId) => {
      const res = await client.get<AccountGetRatedTVEpisodesResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/rated/tv/episodes`, accountId), params));

      return res;
    },
    getMovieWatchlist: async (params, accountId) => {
      const res = await client.get<AccountGetMovieWatchlistResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist/movies`, accountId), params));

      return res;
    },

    getTVShowWatchlist: async (params, accountId) => {
      const res = await client.get<AccountGetTVShowWatchlistResponse>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist/tv`, accountId), params));

      return res;
    },
    addToWatchlist: async (params, body, accountId) => {
      const res = await client.post<AccountAddToWatchlistResponse, typeof body>(buildV3Url(apiKey, getAccountUrlWithId(`${apiUrl}account/{account_id}/watchlist`, accountId), params), body);

      return res;
    },
  };
};
