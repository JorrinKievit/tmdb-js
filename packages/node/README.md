# tmdb-js-node

tmdb-js-node is a fully-typed TypeScript wrapper for the TMDB API. It is designed for use in Node.js applications and supports both v3 and v4 of the TMDB API.

For a browser version, use the tmdb-js-web package.

## Installation

```
npm install tmdb-js-node
```

## Getting started

The library supports the v3 and v4 version of the TMDB API. To use the library, you first need to obtain an API key from the TMDB website. You can then create an instance of the TMDBAPI class and pass your API key to it:

```
import { TMDBNodeApi } from "tmdb-js-node";
const api = new TMDNodeBAPI("your_api_key");
```

If you would like to also use the v4 API:

```
import { TMDBNodeApi } from "tmdb-js-node";
const api = new TMDNodeBAPI("your_api_key", "<your_access_token>");
```

You can then call any of the methods available on the api instance, which correspond to the various API endpoints. For example, multisearch:

```
import { TMDBNodeAPI } from "tmdb-js-node";

const api = new TMDBNodeAPI("your_api_key");

api.v3.search
  .searchMulti({
    query: "Star wars",
  })
  .then((data) => {
    console.log(data);
  });
```

Or using async/await:

```
const response = await api.v3.search.searchMulti({
    query: "Star wars"
})
console.log(response);
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
