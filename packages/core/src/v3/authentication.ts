import { Credentials, Http, ITMDBAPI } from "..";
import {
  AuthenticationCreateGuestSessionResponse,
  AuthenticationCreateRequestTokenResponse,
  AuthenticationCreateSessionResponse,
  AuthenticationCreateSessionWithLoginResponse,
  AuthenticationCreateSessionFromV4AccessTokenResponse,
  AuthenticationDeleteSessionResponse,
} from "../types/v3/authentication";
import { buildV3Url } from "../utils/api";

export const createV3AuthenticationMethods = (client: Http, apiUrl: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["authentication"] => {
  return {
    createGuestSession: async () => {
      return client.get<AuthenticationCreateGuestSessionResponse>(buildV3Url(`${apiUrl}authentication/guest_session/new`, apiKey), accessToken);
    },
    createRequestToken: async () => {
      return client.get<AuthenticationCreateRequestTokenResponse>(buildV3Url(`${apiUrl}authentication/token/new`, apiKey), accessToken);
    },
    createSession: async (body) => {
      return client.post<AuthenticationCreateSessionResponse, typeof body>(buildV3Url(`${apiUrl}authentication/session/new`, apiKey), body, accessToken);
    },
    createSessionWithLogin: async (body) => {
      return client.post<AuthenticationCreateSessionWithLoginResponse, typeof body>(buildV3Url(`${apiUrl}authentication/token/validate_with_login`, apiKey), body, accessToken);
    },
    createSessionFromV4AccessToken: async (body) => {
      return client.post<AuthenticationCreateSessionFromV4AccessTokenResponse, typeof body>(buildV3Url(`${apiUrl}authentication/session/convert/4`, apiKey), body, accessToken);
    },
    deleteSession: async (body) => {
      return client.delete<AuthenticationDeleteSessionResponse, typeof body>(buildV3Url(`${apiUrl}authentication/session`, apiKey), body, accessToken);
    },
  };
};
