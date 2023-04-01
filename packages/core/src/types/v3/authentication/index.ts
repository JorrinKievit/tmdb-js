export interface AuthenticationCreateGuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface AuthenticationCreateRequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface AuthenticationCreateSessionBody {
  request_token: string;
}

export interface AuthenticationCreateSessionResponse {
  success: boolean;
  session_id: string;
}

export interface AuthenticationCreateSessionWithLoginBody {
  username: string;
  password: string;
  request_token: string;
}

export interface AuthenticationCreateSessionWithLoginResponse {
  success: boolean;
  session_id: string;
}

export interface AuthenticationCreateSessionFromV4AccessTokenBody {
  access_token: string;
}

export interface AuthenticationCreateSessionFromV4AccessTokenResponse {
  success: boolean;
  session_id: string;
}

export interface AuthenticationDeleteSessionBody {
  session_id: string;
}

export interface AuthenticationDeleteSessionResponse {
  success: boolean;
}
