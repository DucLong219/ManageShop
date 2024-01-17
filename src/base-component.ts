import { FormBuilder } from '@angular/forms';
import { Subject, Subscription, filter } from "rxjs";
// import { User } from "./models/user";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { SupplierService } from './services/supplier.service';
import { CategoryService } from './services/category.service';
import { ValidatorService } from './services/validator.service';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from './services/modal.service';
// import { AuthenticationService } from './services/authentication.service';

declare var $: any;
@Directive()
export class BaseComponent implements OnDestroy {
  currentUser: any | undefined;
  userInfo: any;
  subscription: Subscription | undefined;
  breadcrumbs: string[] = [];
  public _onDestroySub: Subject<void> = new Subject<void>();
  constructor(
    public router: Router,
    // public authenticationService: AuthenticationService,
    public translateService: TranslateService,
    public formBuilder: FormBuilder,
    public supplierService: SupplierService,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute,
    public el: ElementRef,
    public categoryService: CategoryService,
    public validatorService: ValidatorService,
    public toastrService: ToastrService,
    public modalService: ModalService,


  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        var currentRoute: any = this.activatedRoute;
        while (currentRoute) {
          if (currentRoute.snapshot.data && currentRoute.snapshot.data.breadcrumb) {
            const breadcrumb = currentRoute.snapshot.data.breadcrumb;
            this.breadcrumbs.push(breadcrumb);
          }
          currentRoute = currentRoute.firstChild;
        }
      });
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // this.authenticationService.getUserInfo().subscribe(info => {
    //   this.userInfo = info;
    // });
  }
  setActiveMenu(id: any) {
    $('#sidebar .nav-link').removeClass('active');
    // $(".nav").find(".show").removeClass("show");
    $('#' + id).addClass('active');
    $('#' + id).closest('.collapse').addClass('show');
  }
  refreshPicker() {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 100);
  }
  copyValue(value: any) {
    navigator.clipboard.writeText(value).then(() => {
      this.toastrService.success('Copy thành công');
    })
  }
  compare(a: any, b: any, isAsc: boolean) {
    if (a == undefined || a == null) {
      a = '';
    }
    if (b == undefined || b == null) {
      b = '';
    }
    if (a == b) {
      return 0;
    }
    if (typeof a == 'string' && typeof b == 'string') {
      if (a.length > b.length) {
        if (isAsc) {
          return 1;
        } else {
          return -1;
        }
      }
      if (a.length < b.length) {
        if (isAsc) {
          return -1;
        } else {
          return 1;
        }
      }
    }
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  ngOnDestroy(): void {
    // unsubscribe khi destroy
    console.log(123);

    // if (this._onDestroySub) {
    this._onDestroySub.next();
    this._onDestroySub.complete();
    this._onDestroySub.unsubscribe();
    // }
  }
}
