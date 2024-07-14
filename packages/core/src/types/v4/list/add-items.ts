export interface V4ListAddItemsResponse {
  status_message: string;
  results: V4ListAddItemsResult[];
  success: boolean;
  status_code: number;
}

export interface V4ListAddItemsResult {
  media_type: "movie" | "tv";
  media_id: number;
  success: boolean;
}

export interface V4ListAddItemsBody {
  items: V4ListAddItemsItem[];
}

export interface V4ListAddItemsItem {
  media_type: "movie" | "tv";
  media_id: number;
}
