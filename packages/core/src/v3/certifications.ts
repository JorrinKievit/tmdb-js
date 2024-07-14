import { Credentials, Http, ITMDBAPI } from "..";
import { CertificationsGetMovieCertificationResponse, CertificationsGetTVCertificationResponse } from "../types/v3/certifications";
import { buildV3Url } from "../utils/api";

export const createV3CertificationsMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["certifications"] => {
  return {
    getMovieCertifications: async () => {
      return client.get<CertificationsGetMovieCertificationResponse>(buildV3Url(`${apiUrl}certification/movie/list`, apiKey), accessToken);
    },
    getTVShowCertifications: async () => {
      return client.get<CertificationsGetTVCertificationResponse>(buildV3Url(`${apiUrl}certification/tv/list`, apiKey), accessToken);
    },
  };
};
