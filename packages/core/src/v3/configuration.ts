import {Http, ITMDBAPI} from "..";
import {ConfigurationGetApiConfigurationResponse} from "../types/v3/configuration/get-api-configuration";
import {ConfigurationGetCountriesResponse} from "../types/v3/configuration/get-countries";
import {ConfigurationGetJobsResponse} from "../types/v3/configuration/get-jobs";
import {ConfigurationGetLanguagesResponse} from "../types/v3/configuration/get-languages";
import {ConfigurationGetPrimaryTranslationsResponse} from "../types/v3/configuration/get-primary-translations";
import {ConfigurationGetTimezonesResponse} from "../types/v3/configuration/get-timezones";
import {buildV3Url} from "../utils/api";

export const createV3ConfigurationMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["configuration"] => {
    return {
        getAPIConfiguration: async () => {
            const res = await client.get<ConfigurationGetApiConfigurationResponse>(buildV3Url(apiKey, `${apiUrl}configuration`));

            return res;
        },
        getCountries: async () => {
            const res = await client.get<ConfigurationGetCountriesResponse>(buildV3Url(apiKey, `${apiUrl}configuration/countries`));

            return res;
        },
        getJobs: async () => {
            const res = await client.get<ConfigurationGetJobsResponse>(buildV3Url(apiKey, `${apiUrl}configuration/jobs`));

            return res;
        },
        getLanguages: async () => {
            const res = await client.get<ConfigurationGetLanguagesResponse>(buildV3Url(apiKey, `${apiUrl}configuration/languages`));

            return res;
        },
        getPrimaryTranslations: async () => {
            const res = await client.get<ConfigurationGetPrimaryTranslationsResponse>(buildV3Url(apiKey, `${apiUrl}configuration/primary_translations`));

            return res;
        },
        getTimezones: async () => {
            const res = await client.get<ConfigurationGetTimezonesResponse>(buildV3Url(apiKey, `${apiUrl}configuration/timezones`));

            return res;
        },
    };
};
