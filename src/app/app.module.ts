import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseComponent } from 'src/base-component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from 'src/services/validator.service';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ModalConfirmDeleteComponent } from 'src/modals/modal-confirm-delete/modal-confirm-delete.component';
import { ModalService } from 'src/services/modal.service';
import { ModalAddUpdateCategoryComponent } from 'src/modals/modal-add-update-category/modal-add-update-category.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { JwtInterceptor } from 'src/helpers/jwt.interceptor';
import { ChuKySoComponent } from 'src/form/chu-ky-so/chu-ky-so.component';
import { NgxExtendedPdfViewerModule  } from 'ngx-extended-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,

    SuppliersManageComponent,
    DefaultLayoutComponent, ...authContainers.containers,
    LeftMenuComponent, HeaderComponent, DefaultLayoutComponent, CategoryManageComponent,
    MenuCategoryComponent, ModalConfirmDeleteComponent, ModalAddUpdateCategoryComponent,
    ChuKySoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot(),
    ToastrModule.forRoot(),NgxExtendedPdfViewerModule  ,
    MaterialModule, TranslateModule.forRoot({
      defaultLanguage: environment.default_language,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    BaseComponent,
    AppSettings,
    CategoryService,
    ValidatorService, ModalService,
    provideAnimations(),
    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
