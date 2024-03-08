export interface ListsCreateListResponse {
  status_message: string;
  success: boolean;
  status_code: number;
  list_id: number;
}

export interface ListsCreateListParams {
  session_id: string;
}

export interface ListsCreateListBody {
  name?: string;
  description?: string;
  language?: string;
}
