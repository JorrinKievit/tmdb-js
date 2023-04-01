export interface NetworksGetImagesResponse {
  id: number;
  logos: NetworksGetImagesLogo[];
}

export interface NetworksGetImagesLogo {
  aspect_ratio: number;
  file_path: string;
  height: number;
  id: string;
  file_type: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
