import { Credentials, Http, ITMDBAPI } from "..";
import { KeywordsGetDetailsResponse } from "../types/v3/keywords/get-details";
import { KeywordsGetMoviesResponse } from "../types/v3/keywords/get-movies";
import { buildV3Url } from "../utils/api";

export const createV3KeywordsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["keywords"] => {
  return {
    getDetails: async (keywordId) => {
      return client.get<KeywordsGetDetailsResponse>(buildV3Url(`${url}keyword/${keywordId}`, apiKey), accessToken);
    },
    getMovies: async (keywordId, params) => {
      return client.get<KeywordsGetMoviesResponse>(buildV3Url(`${url}keyword/${keywordId}/movies`, apiKey, params), accessToken);
    },
  };
};
