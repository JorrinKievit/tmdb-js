export interface V4ListUpdateListResponse {
  status_message: string;
  success: boolean;
  status_code: number;
}

export interface V4ListUpdateListBody {
  description?: string;
  name?: string;
  public?: boolean;
  sort_by?: string;
}
