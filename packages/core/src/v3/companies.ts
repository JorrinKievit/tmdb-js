import {Http, ITMDBAPI} from "..";
import {CompaniesGetAlternativeNamesResponse} from "../types/v3/companies/get-alternative-names";
import {CompaniesGetDetailsResponse} from "../types/v3/companies/get-details";
import {CompaniesGetImagesResponse} from "../types/v3/companies/get-images";
import {buildV3Url} from "../utils/api";

export const createV3CompaniesMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["companies"] => {
    return {
        getDetails: async (companyId) => {
            const res = await client.get<CompaniesGetDetailsResponse>(buildV3Url(apiKey, `${apiUrl}company/${companyId}`));

            return res;
        },
        getAlternativeNames: async (companyId) => {
            const res = await client.get<CompaniesGetAlternativeNamesResponse>(buildV3Url(apiKey, `${apiUrl}company/${companyId}/alternative_names`));

            return res;
        },
        getImages: async (companyId) => {
            const res = await client.get<CompaniesGetImagesResponse>(buildV3Url(apiKey, `${apiUrl}company/${companyId}/images`));

            return res;
        },
    };
};
