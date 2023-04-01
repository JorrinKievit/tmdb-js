import { Http, ITMDBAPI } from "..";
import { ChangesGetMovieChangeListResponse } from "../types/v3/changes/get-movie-change-list";
import { ChangesGetPersonChangeListResponse } from "../types/v3/changes/get-person-change-list";
import { ChangesGetTVChangeListResponse } from "../types/v3/changes/get-tv-change-list";
import { buildV3Url } from "../utils/api";

export const createV3ChangesMethods = (
  client: Http,
  apiKey: string,
  apiUrl: string
): ITMDBAPI["v3"]["changes"] => {
  return {
    getMovieChangeList: async (params) => {
      const res = await client.get<ChangesGetMovieChangeListResponse>(
        buildV3Url(apiKey, `${apiUrl}movie/changes`, params)
      );

      return res;
    },
    getTVChangeList: async (params) => {
      const res = await client.get<ChangesGetTVChangeListResponse>(
        buildV3Url(apiKey, `${apiUrl}tv/changes`, params)
      );

      return res;
    },
    getPersonChangeList: async (params) => {
      const res = await client.get<ChangesGetPersonChangeListResponse>(
        buildV3Url(apiKey, `${apiUrl}person/changes`, params)
      );

      return res;
    },
  };
};
