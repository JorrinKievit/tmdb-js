import { Credentials, Http, ITMDBAPI } from "..";
import { ChangesGetMovieChangeListResponse } from "../types/v3/changes/get-movie-change-list";
import { ChangesGetPersonChangeListResponse } from "../types/v3/changes/get-person-change-list";
import { ChangesGetTVChangeListResponse } from "../types/v3/changes/get-tv-change-list";
import { buildV3Url } from "../utils/api";

export const createV3ChangesMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["changes"] => {
  return {
    getMovieChangeList: async (params) => {
      return client.get<ChangesGetMovieChangeListResponse>(buildV3Url(`${apiUrl}movie/changes`, apiKey, params), accessToken);
    },
    getTVChangeList: async (params) => {
      return client.get<ChangesGetTVChangeListResponse>(buildV3Url(`${apiUrl}tv/changes`, apiKey, params), accessToken);
    },
    getPersonChangeList: async (params) => {
      return client.get<ChangesGetPersonChangeListResponse>(buildV3Url(`${apiUrl}person/changes`, apiKey, params), accessToken);
    },
  };
};
