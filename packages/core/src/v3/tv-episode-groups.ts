import { Credentials, Http, ITMDBAPI } from "..";
import { TVEpisodeGroupsGetDetailsResponse } from "../types/v3/tv-episode-groups/get-details";
import { buildV3Url } from "../utils/api";

export const createV3TVEpisodeGroupsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["tvEpisodeGroups"] => {
  return {
    getDetails: async (params, id) => {
      return client.get<TVEpisodeGroupsGetDetailsResponse>(buildV3Url(`${url}tv-episode-group/${id}`, apiKey, params), accessToken);
    },
  };
};
