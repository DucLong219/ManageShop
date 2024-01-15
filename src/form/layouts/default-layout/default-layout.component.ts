import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { VBreadcrumb } from './breadcrumb';
// import {filter} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/base-component';
import { VBreadcrumb } from './breadcrumb';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  titleComponent: string = '';
  public breadcrumbs: VBreadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public translateService: TranslateService,

  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root)
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      console.log('breadcrumbs',this.breadcrumbs);
      
    })
  }
  buildBreadCrumb(route: any = ActivatedRoute, url: string = '', breadcrumb: VBreadcrumb[] = []): VBreadcrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let isClickAble = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickAble;
    let path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    const lastRoutePath: any = path.split('/').pop();
    const isDynamicRoute = lastRoutePath?.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName: any = lastRoutePath?.split(':')[1];
      path = path.replace(lastRoutePath, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadc: VBreadcrumb = {
      label: label,
      url: nextUrl,
    };
    const newBreadcrumbs = breadc.label ? [...breadcrumb, breadc] : [...breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
  changeLanguage(type: number) {
    if (type === 1) {
      this.translateService.use('en-US');
      return;
    } else {
      this.translateService.use('vi-VN');
      return;
    }
  }
}
