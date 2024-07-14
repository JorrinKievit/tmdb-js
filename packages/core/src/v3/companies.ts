import { Credentials, Http, ITMDBAPI } from "..";
import { CompaniesGetAlternativeNamesResponse } from "../types/v3/companies/get-alternative-names";
import { CompaniesGetDetailsResponse } from "../types/v3/companies/get-details";
import { CompaniesGetImagesResponse } from "../types/v3/companies/get-images";
import { buildV3Url } from "../utils/api";

export const createV3CompaniesMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["companies"] => {
  return {
    getDetails: async (companyId) => {
      return client.get<CompaniesGetDetailsResponse>(buildV3Url(`${apiUrl}company/${companyId}`, apiKey), accessToken);
    },
    getAlternativeNames: async (companyId) => {
      return client.get<CompaniesGetAlternativeNamesResponse>(buildV3Url(`${apiUrl}company/${companyId}/alternative_names`, apiKey), accessToken);
    },
    getImages: async (companyId) => {
      return client.get<CompaniesGetImagesResponse>(buildV3Url(`${apiUrl}company/${companyId}/images`, apiKey), accessToken);
    },
  };
};
