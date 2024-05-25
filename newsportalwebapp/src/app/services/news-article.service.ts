import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { QueryParameters } from '../models/QueryParameters'
import { PagedData } from '../models/PagedData';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {

  constructor(private httpClient: HttpClient) {

  }

  getById(id: number) {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/GetById/' + id);
    return result;
  }
  getByQueryParameters(queryParameters: any) {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/GetByQueryParameters?SearchText=' + queryParameters.searchText + '&PageIndex=' + queryParameters.pageIndex + '&SortBy=' + queryParameters.sortBy + '&SortDirection=' + queryParameters.sortDirection + '&PageSize=' + queryParameters.pageSize);
    return result;
  }

  add(request: any) {
    var result = this.httpClient.post<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/Add/', request);
    return result;
  }

  updateById(id: number, request: any) {
    var result = this.httpClient.put<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/UpdateById/' + id, request);
    return result;
  }

  deleteById(id: number) {
    var result = this.httpClient.delete<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/DeleteById/' + id);
    return result;
  }
}
