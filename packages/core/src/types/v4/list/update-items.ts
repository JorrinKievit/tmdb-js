export interface V4ListUpdateItemsResponse {
  status_message: string;
  results: V4ListUpdateItemsResult[];
  success: boolean;
  status_code: number;
}

export interface V4ListUpdateItemsResult {
  media_type: string;
  media_id: number;
  success: boolean;
}

export interface V4ListUpdateItemsBody {
  items: V4ListUpdateItemsItem[];
}

export interface V4ListUpdateItemsItem {
  media_type: string;
  media_id: number;
  comment: string;
}
