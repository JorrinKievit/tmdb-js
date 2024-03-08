import {Http, ITMDBAPI} from "..";
import {FindFindByIdResponse} from "../types/v3/find/find-by-id";
import {buildV3Url} from "../utils/api";

export const createV3FindMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["find"] => {
    return {
        findById: async (externalId: string, params) => {
            const res = await client.get<FindFindByIdResponse>(buildV3Url(apiKey, `${url}find/${externalId}`, params));

            return res;
        },
    };
};
