export interface TVEpisodesGetImagesResponse {
  id: number;
  stills: TVEpisodesGetImagesStill[];
}

export interface TVEpisodesGetImagesStill {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}
