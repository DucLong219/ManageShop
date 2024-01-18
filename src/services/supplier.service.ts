import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/services/api.config';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  deleteAllSupplier(arg0: { ids: any[]; }) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }
  searchSupplier(params: any) {
    return this.http.post(AppSettings.API_GET_SUPPLIER, params);
  }
  deleteSupplier(id: any) {
    return this.http.delete(AppSettings.API_DELETE_SUPPLIER + id + '?api-version=1');
  }
}
