export interface TVGetChangesResponse {
    changes: TVGetChangesChange[];
}

export interface TVGetChangesChange {
    key: string;
    items: TVGetChangesItem[];
}

export interface TVGetChangesItem {
    id: string;
    action: string;
    time: string;
    value?: TVGetChangesValueClass | string;
    iso_639_1?: string;
    original_value?: TVGetChangesOriginalValueClass | string;
}

export interface TVGetChangesOriginalValueClass {
    id?: number;
    name?: string;
    credit_id?: string;
    person_id?: number;
    season_id?: number;
    poster?: TVGetChangesPoster;
    department?: string;
    job?: string;
}

export interface TVGetChangesPoster {
    file_path: string;
    iso_639_1?: null | string;
}

export interface TVGetChangesValueClass {
    season_id?: number;
    season_number?: number;
    id?: number;
    name?: string;
    add_to_every_season?: boolean;
    character?: string;
    credit_id?: string;
    order?: number;
    person_id?: number;
    poster?: TVGetChangesPoster;
    department?: string;
    job?: string;
}

export interface TVGetChangesParams {
    start_date?: string;
    end_date?: string;
    page?: number;
}
