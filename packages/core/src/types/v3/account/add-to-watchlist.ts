export interface AccountAddToWatchlistResponse {
  status_code: number;
  status_message: string;
}

export interface AccountAddToWatchlistParams {
  session_id: string;
}

export interface AccountAddToWatchlistBody {
  media_type: "movie" | "tv";
  media_id: number;
  watchlist: boolean;
}
