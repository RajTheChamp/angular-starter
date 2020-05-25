/**
 * @auther Sahana Chandra
 * @description Wrappers services for service call
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(private httpClient: HttpClient) { }

  public async callApi(method: string, apiURL: any, params?: any, data?: any): Promise<any> {

    const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return await this.httpClient.request(method, apiURL, { body: data, headers: httpOptions, params: params }).toPromise();
  }
}
