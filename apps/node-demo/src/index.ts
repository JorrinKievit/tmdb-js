import { TMDBNodeApi } from "tmdb-js-node";

const tmdbApi = new TMDBNodeApi("YOUR_API_KEY");

tmdbApi.v3.trending.getTrending("movie", "day").then((response) => {
    console.log("GREAT SUCCESS", response.results.length);
});