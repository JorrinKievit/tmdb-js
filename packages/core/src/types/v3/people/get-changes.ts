export interface PeopleGetChangesResponse {
  changes: PeopleGetChangesChange[];
}

export interface PeopleGetChangesChange {
  key: string;
  items: PeopleGetChangesItem[];
}

export interface PeopleGetChangesItem {
  id: string;
  action: string;
  time: string;
  original_value: PeopleGetChangesOriginalValue;
}

export interface PeopleGetChangesOriginalValue {
  profile: PeopleGetChangesProfile;
}

export interface PeopleGetChangesProfile {
  file_path: string;
}

export interface PeopleGetChangesParams {
  end_date?: string;
  page?: number;
  start_date?: string;
}
