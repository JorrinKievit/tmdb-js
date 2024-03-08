export interface PeopleGetImagesResponse {
  id: number;
  profiles: PeopleGetImagesProfile[];
}

export interface PeopleGetImagesProfile {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}
