import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as localforage from 'localforage';
import { clientStoreConfig } from 'src/client-store.config';

@Injectable({
  providedIn: 'root'
})
export class ClientStoreService {

  private store: any;

  constructor(private toastr: ToastrService) {
    this.store = localforage.config(clientStoreConfig);
    this.handleError = this.handleError.bind(this);
  }

  public setItem(key: any, value: any, seralise = data => data) {
    localforage.setItem(key, JSON.parse(JSON.stringify(seralise(value))))
      .catch(this.handleError);
  }


  public async getItem(key: any, deseralise = data => data) {
    const returningValue = await
      localforage.getItem(key)
        .catch(this.handleError);
    return deseralise(returningValue);

  }

  public async removeItem(key: any) {
    const data = this.getItem(key);
    if (data) {
      await localforage.removeItem(key);
    }
  }

  public handleError(error: any) {
    if (error instanceof DOMException) {
      this, this.toastr.warning('Not enouh storage to store locale data, reload will erase data');
    }
  }
}
