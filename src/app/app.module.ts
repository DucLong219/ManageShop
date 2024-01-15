import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseComponent } from 'src/base-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material.module';
import { SuppliersManageComponent } from 'src/form/suppliers-manage/suppliers-manage.component';
import { DefaultLayoutComponent } from 'src/form/layouts/default-layout';
import * as authContainers from 'src/form/auth/containers';
import { CategoryManageComponent } from 'src/form/category-manage/category-manage.component';
import { HeaderComponent } from 'src/form/header';
import { LeftMenuComponent } from 'src/form/left-menu';
import { AppSettings } from 'src/services/api.config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { CategoryService } from 'src/services/category.service';
import { MenuCategoryComponent } from 'src/form/category-manage/menu-category/menu-category.component';

@NgModule({
  declarations: [
    AppComponent,
    
    SuppliersManageComponent,
    DefaultLayoutComponent,...authContainers.containers,
    LeftMenuComponent,HeaderComponent,DefaultLayoutComponent, CategoryManageComponent,
    MenuCategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,TranslateModule.forRoot({
      defaultLanguage: environment.default_language,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [BaseComponent,AppSettings,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}