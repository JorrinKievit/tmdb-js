export interface AccountGetDetailsResponse {
    avatar: AccountGetDetailsAvatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}

export interface AccountGetDetailsAvatar {
    gravatar: AccountGetDetailsGravatar;
}

export interface AccountGetDetailsGravatar {
    hash: string;
}

export interface AccountGetDetailsParams {
    session_id: string;
}
