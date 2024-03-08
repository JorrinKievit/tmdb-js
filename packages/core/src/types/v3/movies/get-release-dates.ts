export interface MoviesGetReleaseDatesResponse {
    id: number;
    results: MoviesGetReleaseDatesResult[];
}

export interface MoviesGetReleaseDatesResult {
    iso_3166_1: string;
    release_dates: MoviesGetReleaseDatesReleaseDate[];
}

export interface MoviesGetReleaseDatesReleaseDate {
    certification: string;
    iso_639_1: string;
    release_date: string;
    type: number;
    note?: string;
}
