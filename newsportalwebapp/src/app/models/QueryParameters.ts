export class QueryParameters {
    searchText?: string;
    pageIndex?: number = 1;
    sortBy?: string = 'Id';
    sortDirection?: string = 'DESC';
    pageSize?: number = 5;
}