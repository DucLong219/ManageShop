import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from './api.config';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public listAllCategory: any = BehaviorSubject<any>;

  constructor(
    private http: HttpClient

  ) {
    this.listAllCategory = new BehaviorSubject<any>({});
  }
  getListAllCategory() {
    return this.http.get(AppSettings.API_GET_LIST_CATEGORY);

  }
  getListCategory(params: any) {
    return this.http.post(AppSettings.API_SEARCH_CATEGORY, params);

  }
  next(value: any) {
    this.listAllCategory.next(value);
  }
  getAllCategory(): Observable<any> {
    return this.listAllCategory.asObservable();
  }
  createCategory(params: any) {
    return this.http.post(AppSettings.API_CREATE_CATEGORY, params);
  }
  editCategory(params:any) {
    return this.http.put(AppSettings.API_CREATE_CATEGORY + params.id + '?api-version=1',params);
  }
  deleteCategory(id: any) {
    return this.http.delete(AppSettings.API_DELETE_CATEGORY + id + '?api-version=1');
  }
}
