# tmdb-js-web

tmdb-js-web is a fully-typed TypeScript wrapper for the TMDB API. It is designed for use in browser-based JavaScript applications and supports both v3 and v4 of the TMDB API. [Browser support](https://caniuse.com/?search=fetch)

For Node.js, use the tmdb-js-node package.

## Installation

```
npm install tmdb-js-web
```

## Getting started

The library supports the v3 and v4 version of the TMDB API. To use the library, you first need to obtain an API key from the TMDB website. You can then create an instance of the TMDBAPI class and pass your API key to it.

Note that for the V4 version of the API you are required to use the access token. For V3 you can use the API key or the access token.

```
import { TMDBWebApi } from "tmdb-js-web";
const api = new TMDBWebAPI({
  apiKey: "",
  accessToken: "",
});
```

You can then call any of the methods available on the api instance, which correspond to the various API endpoints. For example, multisearch:

```
import { TMDBWebAPI } from "tmdb-js-web";

const api = new TMDBWebAPI({
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
