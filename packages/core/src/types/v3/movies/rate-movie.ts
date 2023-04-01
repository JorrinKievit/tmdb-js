export interface MoviesRateMovieResponse {
  status_code: number;
  status_message: string;
}

export interface MoviesRateMovieParams {
  guest_session_id?: string;
  session_id?: string;
}

export interface MoviesRateMovieBody {
  value: number;
}
