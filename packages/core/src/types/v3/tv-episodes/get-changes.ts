export interface TVEpisodesGetChangesResponse {
    changes: TVEpisodesGetChangesChange[];
}

export interface TVEpisodesGetChangesChange {
    key: string;
    items: TVEpisodesGetChangesItem[];
}

export interface TVEpisodesGetChangesItem {
    id: string;
    action: string;
    time: string;
    value: string;
    iso_639_1?: string;
    original_value?: string;
}

export interface TVEpisodesGetChangesParams {
    start_date?: string;
    end_date?: string;
    page?: number;
}
