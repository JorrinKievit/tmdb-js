export interface CompaniesGetAlternativeNamesResponse {
    id: number;
    results: CompaniesGetAlternativeNamesResult[];
}

export interface CompaniesGetAlternativeNamesResult {
    name: string;
    type: string;
}
