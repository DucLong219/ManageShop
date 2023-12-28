import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from 'src/home/home.component';
import { ApiSettingService } from 'src/services/api.config';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
