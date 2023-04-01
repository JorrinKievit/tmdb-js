export interface ListsGetDetailsResponse {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: ListsGetDetailsItem[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string;
}

export interface ListsGetDetailsItem {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ListsGetDetailsParams {
  language?: string;
}
