export interface ResponseType<D> {
    error: boolean;
    message: string;
    statusCode: number;
    data: D;
}

export interface Pagination<T> {
    limit: number;
    offset: number;
    count: number;
    rows: T;
}
