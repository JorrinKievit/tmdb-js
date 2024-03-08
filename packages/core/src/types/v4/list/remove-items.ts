export interface V4ListRemoveItemsResponse {
  status_message: string;
  results: V4ListRemoveItemsResult[];
  success: boolean;
  status_code: number;
}

export interface V4ListRemoveItemsResult {
  media_type: string;
  media_id: number;
  success: boolean;
}

export interface V4ListRemoveItemsBody {
  items: V4ListRemoveItemsItem[];
}

export interface V4ListRemoveItemsItem {
  media_type: string;
  media_id: number;
}
