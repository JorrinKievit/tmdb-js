import {Http, ITMDBAPI} from "..";
import {KeywordsGetDetailsResponse} from "../types/v3/keywords/get-details";
import {KeywordsGetMoviesResponse} from "../types/v3/keywords/get-movies";
import {buildV3Url} from "../utils/api";

export const createV3KeywordsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["keywords"] => {
    return {
        getDetails: async (keywordId) => {
            const res = await client.get<KeywordsGetDetailsResponse>(buildV3Url(apiKey, `${url}keyword/${keywordId}`));

            return res;
        },
        getMovies: async (keywordId, params) => {
            const res = await client.get<KeywordsGetMoviesResponse>(buildV3Url(apiKey, `${url}keyword/${keywordId}/movies`, params));

            return res;
        },
    };
};
