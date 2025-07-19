export interface PaginationResponse<T> {
    limit: number;
    offset: number;
    count: number;
    rows: T;
}
