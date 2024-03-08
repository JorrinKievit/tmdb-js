export interface CollectionsGetDetailsResponse {
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  backdrop_path: string;
  parts: CollectionsGetDetailsPart[];
}

export interface CollectionsGetDetailsPart {
  adult: boolean;
  backdrop_path: null | string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CollectionsGetDetailsParams {
  language?: string;
}
