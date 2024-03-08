export interface NetworksGetAlternativeNamesResponse {
    id: number;
    results: NetworksGetAlternativeNamesResult[];
}

export interface NetworksGetAlternativeNamesResult {
    name: string;
    type: string;
}
