export interface V4AuthDeleteAccessTokenResponse {
  status_message: string;
  success: boolean;
  status_code: number;
}

export interface V4AuthDeleteAccessTokenBody {
  access_token: string;
}
