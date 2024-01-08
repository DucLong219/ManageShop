import { environment } from 'src/environments/environment';
export class AppSettings {
  public static API_ENDPOINT = environment.base_host;

  //Category
  public static API_GET_LIST_CATEGORY = AppSettings.API_ENDPOINT + '/api/v1/microservices/category/get-navigation?api-version=1';
  public static API_GET_CATEGORY_ID = AppSettings.API_ENDPOINT + '/api/v1/microservices/category/get-hierarchy-by-id/';
  public static API_GET_CATEGORY_ALIAS = AppSettings.API_ENDPOINT + '/api/v1/microservices/category/get-navigation?api-version=1';
  //Supplier
  public static API_CREATE_SUPPLIER = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/create?api-version=1';
  public static API_GET_SUPPLIER = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/paging?api-version=1';
  public static API_GET_SUPPLIER_ID = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/get-by-id/';
  public static API_GET_SUPPLIER_ALIAS = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/get-by-alias/';
  public static API_UPDATE_SUPPLIER = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/get-by-alias/';
  public static API_DELETE_SUPPLIER = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/delete/';
  public static API_DELETE_SUPPLIER_MULTIPLE = AppSettings.API_ENDPOINT + '/api/v1/microservices/supplier/delete/';


  //COLUM TABLE
  public static suppliersColumn = ['select', 'CODE_SUPPILER', 'NAME_SUPPILER', 
  'ALIAS_SUPPILER', 'DESCRIPTION', 'BANK', 'ACC_NUMBER', 'BANK_ADDRESS', 'PHONE', 'FAX']
}
