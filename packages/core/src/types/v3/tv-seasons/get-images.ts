export interface TVSeasonsGetImagesResponse {
  id: number;
  posters: TVSeasonsGetImagesPoster[];
}

export interface TVSeasonsGetImagesPoster {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TVSeasonsGetImagesParams {
  language?: string;
}
