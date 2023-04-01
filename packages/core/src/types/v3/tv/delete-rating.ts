export interface TVDeleteRatingResponse {
  status_code: number;
  status_message: string;
}

export interface TVDeleteRatingParams {
  guest_session_id?: string;
  session_id?: string;
}
