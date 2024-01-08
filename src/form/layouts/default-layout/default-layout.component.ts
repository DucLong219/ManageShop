import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { VBreadcrumb } from './breadcrumb';
// import {filter} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/base-component';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent extends BaseComponent implements OnInit {
  titleComponent: string = '';

  ngOnInit(): void {
    const valueVi = this.translateService.get(['home'], 'vi-VN');
    console.log(valueVi);
    const valueEn = this.translateService.get('home', 'en-US');
    console.log(valueEn);
    if (this.breadcrumbs) {
      this.titleComponent = this.breadcrumbs.join(' / ')
    }
  }
  changeLanguage(type:number){
    console.log(234);
    if(type === 1){
      this.translateService.use('en-US');
      return;
    }else{
      this.translateService.use('vi-VN');
      return;
    }
    
    console.log(this.translateService.use('en-US'),'this.translateService.use');
    
  }
}
