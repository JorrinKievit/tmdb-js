import { TMDBNodeApi } from "tmdb-js-node";

const tmdbApi = new TMDBNodeApi("YOUR_API_KEY");

tmdbApi.v4.list.getList();