export interface V4AuthCreateRequestTokenResponse {
  status_message: string;
  request_token: string;
  success: boolean;
  status_code: number;
}

export interface V4AuthCreateRequestTokenBody {
  redirect_to?: string;
}
