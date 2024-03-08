export interface TVGetReviewsResponse {
  id: number;
  page: number;
  results: TVGetReviewsResult[];
  total_pages: number;
  total_results: number;
}

export interface TVGetReviewsResult {
  author: string;
  author_details: TVGetReviewsAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface TVGetReviewsAuthorDetails {
  name: string;
  username: string;
  avatar_path: null | string;
  rating: number;
}

export interface TVGetReviewsParams {
  language?: string;
  page?: number;
}
