export class PagedData<T> {
    currentPage?: number;
    totalPages?: number;
    pageSize?: number;
    totalCount?: number;
    itemsCount?: number;
    matchingRecordCount?: number;
    hasPrevious?: boolean;
    hasNext?: boolean;
    items?: T[]
}