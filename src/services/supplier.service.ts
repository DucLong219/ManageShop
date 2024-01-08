import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/services/api.config';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private http : HttpClient
  ) { }
  searchSupplier(params:any){
    return this.http.post(AppSettings.API_GET_SUPPLIER,params);
  }
  addSuppiler(params:any){
    return this.http.post(AppSettings.API_CREATE_SUPPLIER,params);
  }
}
