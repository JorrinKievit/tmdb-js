export interface BasePersonCredit {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
}

export interface BaseCastCredit extends BasePersonCredit {
    character: string;
    order: number;
}

export interface BaseCrewCredit extends BasePersonCredit {
    department: string;
    job: string;
}
