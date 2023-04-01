export interface V4AuthCreateAccessTokenResponse {
  status_message: string;
  access_token: string;
  success: boolean;
  status_code: number;
  account_id: string;
}

export interface V4AuthCreateAccessTokenBody {
  request_token: string;
}
