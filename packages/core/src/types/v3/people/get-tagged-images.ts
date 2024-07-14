export interface PeopleGetTaggedImagesResponse {
  id: number;
  page: number;
  results: PeopleGetTaggedImagesResult[];
  total_pages: number;
  total_results: number;
}

export interface PeopleGetTaggedImagesResult {
  aspect_ratio: number;
  file_path: string;
  height: number;
  id: string;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
  image_type: string;
  media: PeopleGetTaggedImagesMedia;
  media_type: "movie" | "tv";
}

export interface PeopleGetTaggedImagesMedia {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  _id: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface PeopleGetTaggedImagesParams {
  language?: string;
  page?: number;
}
