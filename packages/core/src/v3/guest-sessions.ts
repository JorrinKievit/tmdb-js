import { Http, ITMDBAPI } from "..";
import { GuestSessionsGetRatedMoviesResponse } from "../types/v3/guest-sessions/get-rated-movies";
import { GuestSessionsGetRatedTVEpisodesResponse } from "../types/v3/guest-sessions/get-rated-tvepisodes";
import { GuestSessionsGetRatedTVShowsResponse } from "../types/v3/guest-sessions/get-rated-tvshows";
import { buildV3Url } from "../utils/api";

export const createV3GuestSessionsMethods = (
  client: Http,
  apiKey: string,
  url: string
): ITMDBAPI["v3"]["guestSessions"] => {
  return {
    getRatedMovies: async (guestSessionId: string, params) => {
      const res = await client.get<GuestSessionsGetRatedMoviesResponse>(
        buildV3Url(
          apiKey,
          `${url}guest_session/${guestSessionId}/rated/movies`,
          params
        )
      );

      return res;
    },
    getRatedTVShows: async (guestSessionId: string, params) => {
      const res = await client.get<GuestSessionsGetRatedTVShowsResponse>(
        buildV3Url(
          apiKey,
          `${url}guest_session/${guestSessionId}/rated/tv`,
          params
        )
      );

      return res;
    },
    getRatedTVEpisodes: async (guestSessionId: string, params) => {
      const res = await client.get<GuestSessionsGetRatedTVEpisodesResponse>(
        buildV3Url(
          apiKey,
          `${url}guest_session/${guestSessionId}/rated/tv/episodes`,
          params
        )
      );

      return res;
    },
  };
};
