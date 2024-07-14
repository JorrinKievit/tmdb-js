import { Http, V4IAuth } from "..";
import { V4AuthCreateAccessTokenResponse } from "../types/v4/auth/create-access-token";
import { V4AuthCreateRequestTokenResponse } from "../types/v4/auth/create-request-token";
import { V4AuthDeleteAccessTokenResponse } from "../types/v4/auth/delete-access-token";
import { createV4Proxy } from "../utils/v4proxy";

export const createV4AuthMethods = (client: Http, apiUrl: string, accessToken?: string): V4IAuth => {
  const authMethods: V4IAuth = {
    createRequestToken: async (body) => {
      return client.post<V4AuthCreateRequestTokenResponse, typeof body>(`${apiUrl}auth/request_token`, body, accessToken);
    },
    createAccessToken: async (body) => {
      return client.post<V4AuthCreateAccessTokenResponse, typeof body>(`${apiUrl}auth/access_token`, body, accessToken);
    },
    deleteAccessToken: async (body) => {
      return client.delete<V4AuthDeleteAccessTokenResponse, typeof body>(`${apiUrl}auth/access_token`, body, accessToken);
    },
  };

  const authMethodsProxy = createV4Proxy(authMethods, accessToken);
  return authMethodsProxy;
};
