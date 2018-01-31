export interface ApiResponse {
    count: number;
    previous?: null;
    results?: (ResultsEntity)[] | null;
    next: string;
}
export interface ResultsEntity {
    url: string;
    name: string;
}
