import {Http, ITMDBAPI} from "..";
import {NetworksGetAlternativeNamesResponse} from "../types/v3/networks/get-alternative-names";
import {NetworksGetDetailsResponse} from "../types/v3/networks/get-details";
import {NetworksGetImagesResponse} from "../types/v3/networks/get-images";
import {buildV3Url} from "../utils/api";

export const createV3NetworksMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["networks"] => {
    return {
        getDetails: async (networkId: number) => {
            const res = await client.get<NetworksGetDetailsResponse>(buildV3Url(apiKey, `${url}network/${networkId}`));

            return res;
        },
        getAlternativeNames: async (networkId: number) => {
            const res = await client.get<NetworksGetAlternativeNamesResponse>(buildV3Url(apiKey, `${url}network/${networkId}/alternative_names`));

            return res;
        },
        getImages: async (networkId: number) => {
            const res = await client.get<NetworksGetImagesResponse>(buildV3Url(apiKey, `${url}network/${networkId}/images`));

            return res;
        },
    };
};
