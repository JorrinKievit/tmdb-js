import { Http, ITMDBAPI } from "..";
import { GenresGetMovieListResponse } from "../types/v3/genres/get-movie-list";
import { GenresGetTVListResponse } from "../types/v3/genres/get-tv-list";
import { buildV3Url } from "../utils/api";

export const createV3GenresMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["genres"] => {
  return {
    getMovieList: async (params) => {
      const res = await client.get<GenresGetMovieListResponse>(buildV3Url(apiKey, `${url}genre/movie/list`, params));

      return res;
    },
    getTVList: async (params) => {
      const res = await client.get<GenresGetTVListResponse>(buildV3Url(apiKey, `${url}genre/tv/list`, params));

      return res;
    },
  };
};
