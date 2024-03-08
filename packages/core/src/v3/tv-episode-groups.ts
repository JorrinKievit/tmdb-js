import {Http, ITMDBAPI} from "..";
import {TVEpisodeGroupsGetDetailsResponse} from "../types/v3/tv-episode-groups/get-details";
import {buildV3Url} from "../utils/api";

export const createV3TVEpisodeGroupsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["tvEpisodeGroups"] => {
    return {
        getDetails: async (params, id) => {
            const res = await client.get<TVEpisodeGroupsGetDetailsResponse>(buildV3Url(apiKey, `${url}tv-episode-group/${id}`, params));

            return res;
        },
    };
};
