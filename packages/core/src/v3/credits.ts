import {Http, ITMDBAPI} from "..";
import {CreditsGetDetailsResponse} from "../types/v3/credits/get-details";
import {buildV3Url} from "../utils/api";

export const createV3CreditsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["credits"] => {
    return {
        getDetails: async (creditId: string) => {
            const res = await client.get<CreditsGetDetailsResponse>(buildV3Url(apiKey, `${url}credit/${creditId}`));

            return res;
        },
    };
};
