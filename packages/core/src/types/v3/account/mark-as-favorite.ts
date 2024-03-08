export interface AccountMarkAsFavoriteResponse {
  status_code: number;
  status_message: string;
}

export interface AccountMarkAsFavoriteParams {
  session_id: string;
}

export interface AccountMarkAsFavoriteBody {
  media_type: "movie" | "tv";
  media_id: number;
  favorite: boolean;
}
