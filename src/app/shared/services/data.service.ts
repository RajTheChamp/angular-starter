import { Injectable } from '@angular/core';
import { WrapperService } from './wrapper.service';
import { promise } from 'protractor';
import { url } from '../utils/constants/url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private wrapperService: WrapperService) { }

  async get(): Promise<any> {
    return await this.wrapperService.callApi('get', url.sample);
  }

  async  getDynamicformData(): Promise<any> {
    return await this.wrapperService.callApi('get', url.dynamicform);
  }

}
