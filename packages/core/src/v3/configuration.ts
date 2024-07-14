import { Credentials, Http, ITMDBAPI } from "..";
import { ConfigurationGetApiConfigurationResponse } from "../types/v3/configuration/get-api-configuration";
import { ConfigurationGetCountriesResponse } from "../types/v3/configuration/get-countries";
import { ConfigurationGetJobsResponse } from "../types/v3/configuration/get-jobs";
import { ConfigurationGetLanguagesResponse } from "../types/v3/configuration/get-languages";
import { ConfigurationGetPrimaryTranslationsResponse } from "../types/v3/configuration/get-primary-translations";
import { ConfigurationGetTimezonesResponse } from "../types/v3/configuration/get-timezones";
import { buildV3Url } from "../utils/api";

export const createV3ConfigurationMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["configuration"] => {
  return {
    getAPIConfiguration: async () => {
      return client.get<ConfigurationGetApiConfigurationResponse>(buildV3Url(`${apiUrl}configuration`, apiKey), accessToken);
    },
    getCountries: async () => {
      return client.get<ConfigurationGetCountriesResponse>(buildV3Url(`${apiUrl}configuration/countries`, apiKey), accessToken);
    },
    getJobs: async () => {
      return client.get<ConfigurationGetJobsResponse>(buildV3Url(`${apiUrl}configuration/jobs`, apiKey), accessToken);
    },
    getLanguages: async () => {
      return client.get<ConfigurationGetLanguagesResponse>(buildV3Url(`${apiUrl}configuration/languages`, apiKey), accessToken);
    },
    getPrimaryTranslations: async () => {
      return client.get<ConfigurationGetPrimaryTranslationsResponse>(buildV3Url(`${apiUrl}configuration/primary_translations`, apiKey), accessToken);
    },
    getTimezones: async () => {
      return client.get<ConfigurationGetTimezonesResponse>(buildV3Url(`${apiUrl}configuration/timezones`, apiKey), accessToken);
    },
  };
};
