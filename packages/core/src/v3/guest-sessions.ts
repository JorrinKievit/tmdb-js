import { Credentials, Http, ITMDBAPI } from "..";
import { GuestSessionsGetRatedMoviesResponse } from "../types/v3/guest-sessions/get-rated-movies";
import { GuestSessionsGetRatedTVEpisodesResponse } from "../types/v3/guest-sessions/get-rated-tvepisodes";
import { GuestSessionsGetRatedTVShowsResponse } from "../types/v3/guest-sessions/get-rated-tvshows";
import { buildV3Url } from "../utils/api";

export const createV3GuestSessionsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["guestSessions"] => {
  return {
    getRatedMovies: async (guestSessionId: string, params) => {
      return client.get<GuestSessionsGetRatedMoviesResponse>(buildV3Url(`${url}guest_session/${guestSessionId}/rated/movies`, apiKey, params), accessToken);
    },
    getRatedTVShows: async (guestSessionId: string, params) => {
      return client.get<GuestSessionsGetRatedTVShowsResponse>(buildV3Url(`${url}guest_session/${guestSessionId}/rated/tv`, apiKey, params), accessToken);
    },
    getRatedTVEpisodes: async (guestSessionId: string, params) => {
      return client.get<GuestSessionsGetRatedTVEpisodesResponse>(buildV3Url(`${url}guest_session/${guestSessionId}/rated/tv/episodes`, apiKey, params), accessToken);
    },
  };
};
