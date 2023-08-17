import { Http, ITMDBAPI } from "..";
import { CertificationsGetMovieCertificationResponse, CertificationsGetTVCertificationResponse } from "../types/v3/certifications";
import { buildV3Url } from "../utils/api";

export const createV3CertificationsMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["certifications"] => {
  return {
    getMovieCertifications: async () => {
      const res = await client.get<CertificationsGetMovieCertificationResponse>(buildV3Url(apiKey, `${apiUrl}certification/movie/list`));

      return res;
    },
    getTVShowCertifications: async () => {
      const res = await client.get<CertificationsGetTVCertificationResponse>(buildV3Url(apiKey, `${apiUrl}certification/tv/list`));

      return res;
    },
  };
};
