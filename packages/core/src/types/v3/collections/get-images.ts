export interface CollectionsGetImagesResponse {
    id: number;
    backdrops: CollectionsGetImagesBackdrop[];
    posters: CollectionsGetImagesBackdrop[];
}

export interface CollectionsGetImagesBackdrop {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null | string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface CollectionsGetImagesParams {
    language?: string;
}
