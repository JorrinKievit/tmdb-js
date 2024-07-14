# tmdb-js-node

tmdb-js-node is a fully-typed TypeScript wrapper for the TMDB API. It is designed for use in Node.js applications and supports both v3 and v4 of the TMDB API.

For a browser version, use the tmdb-js-web package.

## Installation

```
npm install tmdb-js-node
```

## Getting started

The library supports the v3 and v4 version of the TMDB API. To use the library, you first need to obtain an API key from the TMDB website. You can then create an instance of the TMDBAPI class and pass your API key to it.

Note that for the V4 version of the API you are required to use the access token. For V3 you can use the API key or the access token.

```
import { TMDBNodeApi } from "tmdb-js-node";
const api = new TMDBNodeApi({
  apiKey: "",
  accessToken: "",
});
```

You can then call any of the methods available on the api instance, which correspond to the various API endpoints. For example, multisearch:

```
import { TMDBNodeApi } from "tmdb-js-node";

const api = new TMDBNodeApi({
  apiKey: "",
  accessToken: "",
});

const response = await api.v3.search.searchMulti({
    query: "Star wars"
})
```

## API endpoints

The package supports all endpoints:

### V3

- Account
- Authentication
- Certifications
- Changes
- Collections
- Companies
- Configuration
- Credits
- Discover
- Find
- Genres
- Guest sessions
- Keywords
- Lists
- Movies
- Networks
- Trending
- People
- Reviews
- Search
- TV
- TV Seasons
- TV Episodes
- TV Episode Groups
- Watch Providers

### V4

- Account
- Auth
- List
