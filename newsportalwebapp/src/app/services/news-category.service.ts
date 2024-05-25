import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {

  constructor(private httpClient: HttpClient) {

  }

  
  get() {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsCategory/Get');
    return result;
  }

  getById(id: number) {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsCategory/GetById/' + id);
    return result;
  }
  getByQueryParameters(queryParameters: any) {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsCategory/GetByQueryParameters?SearchText=' + queryParameters.searchText + '&PageIndex=' + queryParameters.pageIndex + '&SortBy=' + queryParameters.sortBy + '&SortDirection=' + queryParameters.sortDirection + '&PageSize=' + queryParameters.pageSize);
    return result;
  }

  add(request: any) {
    var result = this.httpClient.post<any>(environment.newsPortalApiBaseUrl + '/api/NewsCategory/Add/', request);
    return result;
  }
}
