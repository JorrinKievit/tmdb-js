# tmdb-js

This is the monorepo for the tmdb-js-web and tmdb-js-node packages. Both packages are used to interact with the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). The tmdb-js-web package is used for web applications, and the tmdb-js-node package is used for Node.js applications. Both packages are fully-typed TypeScript wrappers for the TMDB API. Currently all endpoints are supported:

- :white_check_mark: V3
  - :white_check_mark: Account
  - :white_check_mark: Authentication
  - :white_check_mark: Certifications
  - :white_check_mark: Changes
  - :white_check_mark: Collections
  - :white_check_mark: Companies
  - :white_check_mark: Configuration
  - :white_check_mark: Credits
  - :white_check_mark: Discover
  - :white_check_mark: Find
  - :white_check_mark: Genres
  - :white_check_mark: Guest sessions
  - :white_check_mark: Keywords
  - :white_check_mark: Lists
  - :white_check_mark: Movies
  - :white_check_mark: Networks
  - :white_check_mark: Trending
  - :white_check_mark: People
  - :white_check_mark: Reviews
  - :white_check_mark: Search
  - :white_check_mark: TV
  - :white_check_mark: TV Seasons
  - :white_check_mark: TV Episodes
  - :white_check_mark: TV Episode Groups
  - :white_check_mark: Watch Providers
- :white_check_mark: V4
  - :white_check_mark: Account
  - :white_check_mark: Auth
  - :white_check_mark: List

## Getting started

For documentation on how to use the tmdb-js-web and tmdb-js-node packages, please see the README files in the packages folder.

tmdb-js-web: [README.md](packages/web/README.md)
tmdb-js-node: [README.md](packages/node/README.md)

### Useful information

The tmdb-js-web package uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests to the TMDB API. This means that the package is only supported in browsers that support the Fetch API. You can check browser support [here](https://caniuse.com/?search=fetch).

The tmdb-js-node package uses the https module to make requests to the TMDB API. This means that the package is only supported in Node.js versions that support the https module. You can check Node.js support [here](https://nodejs.org/api/https.html).

The V4 endpoints require an access token. You can get an access token by following the instructions [here](https://developers.themoviedb.org/4/getting-started/authentication).

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```
