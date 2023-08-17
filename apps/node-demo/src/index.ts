import { TMDBNodeApi } from "tmdb-js-node";

const tmdbApi = new TMDBNodeApi("YOUR_API_KEY");

tmdbApi.v3.movies
  .getDetails(550, {
    append_to_response: ["images", "videos"],
  })
  .then((response) => {
    console.log(response.videos);
  });
