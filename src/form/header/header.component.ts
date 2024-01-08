import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { empty, EMPTY, forkJoin, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';

declare var $: any;
declare var formsSDK: any;

@Component({ selector: 'header-app', templateUrl: 'header.component.html', styleUrls: ['header.component.scss'] })
export class HeaderComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger, { static: true }) matAutocompleteTrigger: MatAutocompleteTrigger | undefined;
  // userInfo = new UserInfo();
  // currentUser: User;
  // avartar: any;
  // countUnreadMessage: any;
  // objNotify: any;
  // public subscription: Subscription;
  // searchOrderForm: FormGroup;
  // displayName: string;
  // listInviteStaff = [];
  // selectedLanguage: string;
  // flagLang: any;
  // filterGroupOption = [];
  constructor(
    // public authenticationService: AuthenticationService,
    // public notificationService: NotificationService,
    // public httpService: HttpService,
    // public router: Router,
    // public activeRoute: ActivatedRoute,
    // public formBuilder: FormBuilder,
    // public translate: TranslateService,
    // public titleService: Title,
    // public toastService: ToastrService,
    // public firebaseService: FirebaseService,
    // private moeService: MoengageService
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
    // this.authenticationService.getUserInfo().subscribe(info => {
    //   this.userInfo = info;
    //   if (this.userInfo) {
    //     if (this.userInfo['AVATAR']) {
    //       this.avartar = 'data:image/png;base64,' + this.userInfo['AVATAR'];
    //     } else {
    //       this.avartar = 'assets/img/icon-user.png';
    //     }

    //     if (this.userInfo['LASTNAME'] && this.userInfo['FIRSTNAME']) {
    //       this.displayName = this.userInfo['LASTNAME'] + ' ' + this.userInfo['FIRSTNAME'];
    //     } else {
    //       this.displayName = this.userInfo['DISPLAYNAME'];
    //     }
    //   }
    // });
  }

  // private _filterGroup(list) {
  //   return list.filter((el, index) => index < 5);
  // }

  ngOnInit() {
  //   this.checkIsTrackingOrderPage();
  //   this.notificationService.notify(this.currentUser.tokenKey);
  //   this.subscription = this.notificationService.getNotify()
  //     .subscribe(data => {
  //       this.objNotify = data;
  //     });

  //   this.httpService.get(AppSettings.API_CHECK_INVITE_USER).subscribe(res => {
  //     if (res && !res.error) {
  //       const data = res.data;
  //       if (data && data.length > 0) {
  //         this.listInviteStaff = data;
  //         $("#confirmInvite").modal('show');
  //       }
  //     }
  //   });

  //   const language = localStorage.getItem('language');
  //   if (language == VtContants.LANGUAGE_KEY.EN) {
  //     this.selectedLanguage = 'English';
  //     defineLocale("en-us", enGbLocale);
  //     this.flagLang = VtContants.LANGUAGE_KEY.EN + '.png';
  //   } else {
  //     this.selectedLanguage = 'Tiếng việt';
  //     defineLocale("vi-vn", viLocale);
  //     this.flagLang = VtContants.LANGUAGE_KEY.VI + '.png';
  //   }
  // }

  // get fSearchOrderForm() {
  //   return this.searchOrderForm.controls;
  // }

  // initSearchOrderForm(orderNumber?: any) {
  //   if (orderNumber === undefined) {
  //     this.searchOrderForm = this.formBuilder.group({
  //       searchOrderNumber: [''],
  //     });
  //   } else {
  //     this.searchOrderForm = this.formBuilder.group({
  //       searchOrderNumber: [orderNumber],
  //     });
  //   }

  //   this.fSearchOrderForm.searchOrderNumber.valueChanges
  //     .pipe(
  //       debounceTime(300),
  //       switchMap(value => this.searchFilterOrder(value))
  //     ).subscribe(res => {
  //       this.filterGroupOption = res;
  //     });
  }

  // checkIsTrackingOrderPage() {
  //   const currentPath = window.location.pathname;
  //   const pathTrackingOrder = 'thong-tin-don-hang';
  //   if (currentPath.includes(pathTrackingOrder)) {
  //     this.activeRoute.queryParamMap.subscribe((params: ParamMap) => {
  //       const orderNumber = params.get('orderNumber');
  //       if (orderNumber !== undefined || orderNumber !== null || orderNumber !== '') {
  //         this.initSearchOrderForm(orderNumber);
  //       } else {
  //         this.initSearchOrderForm();
  //       }
  //     })
  //   } else {
  //     this.initSearchOrderForm();
  //   }
  // }

  // searchFilterOrder(value): Observable<any> {
  //   if (!value) {
  //     this.filterGroupOption = [];
  //     return EMPTY;
  //   }
  //   const searchOrder = this.httpService.fetch(AppSettings.API_SUGGEST_BY_ORDER_NUMBER + '?q=' + encodeURIComponent(value));
  //   const searchReceiver = this.httpService.fetch(AppSettings.SUGGEST_RECEIVER + encodeURIComponent(value));
  //   const searchOrderReceiver = this.httpService.fetch(AppSettings.API_SUGGEST_BY_ORDER_NUMBER + '?q=' + encodeURIComponent(value) + '&type=incoming');

  //   return forkJoin(searchOrder, searchReceiver, searchOrderReceiver).pipe(
  //     map((responses: any) => {
  //       const orderFilter = responses[0];
  //       const receiverFilter = responses[1];
  //       const orderReceiverFilter = responses[2];
  //       let result = [];
  //       if (orderFilter && orderFilter.length > 0) {
  //         result.push({
  //           group: 'order',
  //           more: orderFilter.length > 5,
  //           data: this._filterGroup(orderFilter)
  //         })
  //       }
  //       if (orderReceiverFilter && orderReceiverFilter.length > 0) {
  //         result.push({
  //           group: 'receiver',
  //           more: orderReceiverFilter.length > 5,
  //           data: this._filterGroup(orderReceiverFilter)
  //         })
  //       }
  //       if (receiverFilter && receiverFilter.items && receiverFilter.items.length > 0) {
  //         result.push({
  //           group: 'address',
  //           more: receiverFilter.items.length > 5,
  //           data: this._filterGroup(receiverFilter.items)
  //         })
  //       }
  //       return result;
  //     })
  //   );
  // }

  sidebarCollapse() {
    $('#sidebar').toggleClass('active');
    $('.vtp-web').toggleClass('active');
  }

  // logout() {
  //   // Track MOE Logout
  //   this.moeService.trackEvent('Logout', { unique_id: this.userInfo.CUS_ID, platform: 'WEB' });
  //   this.moeService.logout();

  //   this.authenticationService.logout(this.userInfo);
  // }

  // getImageNotify(item): string {
  //   const type = item.type;
  //   const payload = item.payload;
  //   if (type == 0) {
  //     return "assets/img/icon/icon-promotion.svg";
  //   } else if (type == 2 && payload == 501) {
  //     return "assets/img/icon/icon-dhtc.svg";
  //   } else if (type == 2 && payload == 505) {
  //     return "assets/img/icon/icon-dhdh.svg";
  //   } else if (type == 3) {
  //     return "assets/img/icon/icon-message.svg";
  //   } else if (type == 5 && item.ref.startsWith("excel-")) {
  //     return "assets/img/icon/icon-excel.svg";
  //   } else if (item.ref.startsWith('login_interactions')){
  //     return "assets/img/icon/notify-login.svg";
  //   } else {
  //     return "assets/img/icon/icon-notification-system.svg";
  //   }
  // }

  // readNotify(item, openPage) {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.THONG_BAO_THONG_BAO_CHI_TIET);
  //   if (item.status == 0) {
  //     this.httpService.fetch(AppSettings.URL_READ_NOTI + item.id).then(r => {
  //       if (r) {
  //         let obj = this.notificationService.get();
  //         obj.countUnreadMessage--;
  //         item.status = 1;
  //       }
  //     })
  //   }
  //   if (openPage) {
  //     const type = item.type;
  //     const payload = item.payload;
  //     const ref = item.ref;
  //     switch(true){
  //       case ("shake_history" == ref || ref.startsWith("shake_screen")):
  //         return;
  //       break;
  //       case ref.startsWith("excel-"):
  //         let excelId = ref.split("-")[1];
  //         this.router.navigate(['/excel/excel-detail'], { queryParams: { fieldId: excelId } });
  //       break;
  //       case (type == 2 && 101 == payload):
  //         window.open('http://vtp-app-manual-wordpress-microsites.oc.viettelpost.vn/huong-dan-su-dung-tinh-nang-tao-don-dau-nhan/', '_blank');
  //       break;
  //       case (type == 2):
  //         let orderNumber = ref.split("$")[2].substring(1);
  //         this.router.navigate(['thong-tin-don-hang'], { queryParams: { peopleTracking: 'sender', orderNumber: orderNumber } });
  //       break;
  //       case (type == 3):
  //         $('.chatbox-button').click();
  //       break;
  //       case (101 == payload && type == 5):
  //         return;
  //       break;
  //       case (ref.startsWith('https://forms.okd.viettelpost.vn')):
  //         formsSDK.open(ref, { utm: { source: 'web' } });
  //       break;
  //       case ref.startsWith('login_interactions'):
  //         this.router.navigateByUrl('/cau-hinh-tai-khoan', { state: { activeTab: 'dsdn' } });
  //       break;
  //       default:
  //         window.open(ref, '_blank');
  //       break;
  //     }
  //   }
  // }

  // updateInviteStaff(item, isConfirm) {
  //   let typeInvite = 1;
  //   if (!isConfirm) typeInvite = 2;
  //   let params = { "TYPE": typeInvite, "GROUPADDRESS_ID": item.GROUPADDRESS_ID };
  //   this.httpService.post(AppSettings.API_CONFIRM_INVITE_USER, params).subscribe(res => {
  //     if (res && !res.error) {
  //       if (isConfirm) this.toastService.success(this.translate.instant('vtp.label.xac.nhan.loi.moi.confirm', { fieldName: item.NAME }));
  //       else this.toastService.success(this.translate.instant('vtp.label.xac.nhan.loi.moi.cancel', { fieldName: item.NAME }));
  //       this.listInviteStaff = this.listInviteStaff.filter(obj => {
  //         return obj.CUS_ID != item.CUS_ID;
  //       });
  //       if (this.listInviteStaff.length == 0) {
  //         $("#confirmInvite").modal('hide');
  //       }
  //     } else {
  //       this.toastService.error(res.message);
  //       $("#confirmInvite").modal('hide');
  //     }
  //   });
  // }

  // redirectBySuggesst(showMore?, type?, item?) {
  //   if (type == 'order') {
  //     if (showMore) this.router.navigateByUrl('/quan-ly-van-don');
  //     else {
  //       const params = { 'peopleTracking': 'sender', 'orderNumber': item.id };
  //       this.router.navigate(['thong-tin-don-hang'], { queryParams: params });
  //     }
  //   }
  //   else if (type == 'address') {
  //     if (showMore) this.router.navigateByUrl('/cau-hinh-tai-khoan', { state: { activeTab: 'dskh' } });
  //     else {
  //       let params = item;
  //       params.isReceiver = true;
  //       const encodeCus = btoa(encodeURIComponent(JSON.stringify(params)));
  //       this.router.navigateByUrl('/order/tao-don-le?q=' + encodeCus);
  //     }
  //   } else if (type == 'receiver') {
  //     if (showMore) this.router.navigateByUrl('/quan-ly-van-don#receiver');
  //     else {
  //       const params = { 'peopleTracking': 'receiver', 'orderNumber': item.id };
  //       this.router.navigate(['thong-tin-don-hang'], { queryParams: params });
  //     }
  //   }
  //   this.fSearchOrderForm.searchOrderNumber.setValue('');
  //   this.matAutocompleteTrigger.closePanel();
  // }
  // ngOnDestroy(): void {
  //   this.subscription && this.subscription.unsubscribe();
  // }
}
