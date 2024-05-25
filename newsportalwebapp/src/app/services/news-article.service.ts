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

  getById(id:number){
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/GetById/'+id);
    console.log('result from GetById api: '+JSON.stringify(result));
    return result;
  }
  getByQueryParameters(queryParameters: any) {
    var result = this.httpClient.get<any>(environment.newsPortalApiBaseUrl + '/api/NewsArticles/GetByQueryParameters?SearchText='+queryParameters.searchText+'&PageIndex=' + queryParameters.pageIndex + '&SortBy=' + queryParameters.sortBy + '&SortDirection=' + queryParameters.sortDirection + '&PageSize=' + queryParameters.pageSize);

    console.log('result from getByQueryParameters api: '+JSON.stringify(result));
    return result;
  }
}
