import { useEffect, useState } from "react";
import "./App.css";

import { SearchMultiSearchResponse, TMDBWebAPI } from "tmdb-js-web";

function App() {
  const [data, setData] = useState<SearchMultiSearchResponse | null>(null);

  useEffect(() => {
    const tmdbApi = new TMDBWebAPI("YOUR_API_KEY");
    tmdbApi.v3.trending.getTrending("all", "day").then((res) => {
      console.log(res)
    });
  }, []);

  return (
    <div className="App">
      <h1>{data?.results[0]?.title}</h1>
      <p>{data?.results[0]?.overview}</p>
    </div>
  );
}

export default App;
