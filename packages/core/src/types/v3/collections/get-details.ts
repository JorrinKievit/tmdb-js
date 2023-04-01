export interface CollectionsGetDetailsResponse {
  id: number;
  name: string;
  overview: string;
  poster_path: null;
  backdrop_path: string;
  parts: CollectionsGetDetailsPart[];
}

export interface CollectionsGetDetailsPart {
  adult: boolean;
  backdrop_path: null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: Date;
  poster_path: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CollectionsGetDetailsParams {
  language?: string;
}
