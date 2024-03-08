export interface TVGetAccountStatesResponse {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  };
  watchlist: boolean;
}

export interface TVGetAccountStatesParams {
  language?: string;
  guest_session_id?: string;
  session_id?: string;
}
