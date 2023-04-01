export interface MoviesGetImagesResponse {
  id: number;
  backdrops: MoviesGetImagesBackdrop[];
  posters: MoviesGetImagesBackdrop[];
}

export interface MoviesGetImagesBackdrop {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MoviesGetImagesParams {
  language?: string;
  include_image_language?: string;
}
