import {Http, ITMDBAPI} from "..";
import {
    AuthenticationCreateGuestSessionResponse,
    AuthenticationCreateRequestTokenResponse,
    AuthenticationCreateSessionResponse,
    AuthenticationCreateSessionWithLoginResponse,
    AuthenticationCreateSessionFromV4AccessTokenResponse,
    AuthenticationDeleteSessionResponse,
} from "../types/v3/authentication";
import {buildV3Url} from "../utils/api";

export const createV3AuthenticationMethods = (client: Http, apiKey: string, apiUrl: string): ITMDBAPI["v3"]["authentication"] => {
    return {
        createGuestSession: async () => {
            const res = await client.get<AuthenticationCreateGuestSessionResponse>(buildV3Url(apiKey, `${apiUrl}authentication/guest_session/new`));

            return res;
        },
        createRequestToken: async () => {
            const res = await client.get<AuthenticationCreateRequestTokenResponse>(buildV3Url(apiKey, `${apiUrl}authentication/token/new`));
            return res;
        },
        createSession: async (body) => {
            const res = await client.post<AuthenticationCreateSessionResponse, typeof body>(buildV3Url(apiKey, `${apiUrl}authentication/session/new`), body);

            return res;
        },
        createSessionWithLogin: async (body) => {
            const res = await client.post<AuthenticationCreateSessionWithLoginResponse, typeof body>(buildV3Url(apiKey, `${apiUrl}authentication/token/validate_with_login`), body);

            return res;
        },
        createSessionFromV4AccessToken: async (body) => {
            const res = await client.post<AuthenticationCreateSessionFromV4AccessTokenResponse, typeof body>(buildV3Url(apiKey, `${apiUrl}authentication/session/convert/4`), body);

            return res;
        },
        deleteSession: async (body) => {
            const res = await client.delete<AuthenticationDeleteSessionResponse, typeof body>(buildV3Url(apiKey, `${apiUrl}authentication/session`), body);

            return res;
        },
    };
};
