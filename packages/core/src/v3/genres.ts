import { Credentials, Http, ITMDBAPI } from "..";
import { GenresGetMovieListResponse } from "../types/v3/genres/get-movie-list";
import { GenresGetTVListResponse } from "../types/v3/genres/get-tv-list";
import { buildV3Url } from "../utils/api";

export const createV3GenresMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["genres"] => {
  return {
    getMovieList: async (params) => {
      return client.get<GenresGetMovieListResponse>(buildV3Url(`${url}genre/movie/list`, apiKey, params), accessToken);
    },
    getTVList: async (params) => {
      return client.get<GenresGetTVListResponse>(buildV3Url(`${url}genre/tv/list`, apiKey, params), accessToken);
    },
  };
};
