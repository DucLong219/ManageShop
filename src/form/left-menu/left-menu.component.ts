import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { AppSettings, AuthenticationService, HttpService } from '@/_services';
// import { UserInfo } from '@/_models/user-info';
// import { User } from '@/_models';
// import { VtContants } from '@/_utils/vtp.contants';
// import { NotificationService } from "@/_services/notification.service";
import { Router } from '@angular/router';
// import { FirebaseService } from "@/_services/firebase.service";
// import { HotkeysService } from '@/_hotkeys/hotkeys.service';
// import { Hotkey } from '@/_hotkeys/hotkey.model';

declare var $: any;
declare const chatbox: any;
declare var formsSDK: any;

@Component({
  selector: 'left-menu',
  templateUrl: 'left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})

export class LeftMenuComponent implements OnInit {

  // userInfo = new UserInfo();
  // currentUser: User;
  dataInfor: any;
  @Output() onLoad = new EventEmitter<any>(true);
  isShowInsuranceService: any;

  constructor(
    // private authenticationService: AuthenticationService,
    // public notificationService: NotificationService,
    // public httpService: HttpService,
    public router: Router,
    // public firebaseService: FirebaseService,
    // public hotkeysService: HotkeysService
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
    // this.hotkeysService.add(new Hotkey('ctrl+shift+l', (event: KeyboardEvent): boolean => {
    //   this.router.navigateByUrl('order/tao-don-le');
    //   return false;
    // }));
    // this.hotkeysService.add(new Hotkey('ctrl+shift+q', (event: KeyboardEvent): boolean => {
    //   this.router.navigateByUrl('quan-ly-van-don');
    //   return false;
    // }));
    // this.hotkeysService.add(new Hotkey('ctrl+shift+k', (event: KeyboardEvent): boolean => {
    //   this.router.navigateByUrl('thong-ke-tien-hang');
    //   return false;
    // }));
    // this.hotkeysService.add(new Hotkey('ctrl+shift+h', (event: KeyboardEvent): boolean => {
    //   this.router.navigateByUrl('dashboard');
    //   return false;
    // }));
  }
  ngOnInit() {
    // this.checkIsUpdateInformation();
    let self = this;
    // this.firebaseService.fetchRemoteConfig().then(() => {
    //   this.isShowInsuranceService = this.firebaseService.remoteConfig.getValue('DICH_VU_HOAN_CUOC').asString();
    // });
    // if (this.currentUser) {
    //   try {

    //     chatbox({
    //       firebase: {
    //         apiKey: 'AIzaSyBIl4Dd8vt6UykRmg_LG0gURMwyUZtvi6I',
    //         authDomain: 'viettel-post-8cb80.firebaseapp.com',
    //         databaseURL: 'https://viettel-post-8cb80.firebaseio.com',
    //         projectId: 'viettel-post-8cb80',
    //         storageBucket: 'viettel-post-8cb80.appspot.com',
    //         messagingSenderId: '548976814356',
    //         appId: '1:548976814356:web:f6d400dedc3a6cf6357a01',
    //         measurementId: 'G-L7ZKY279LR'
    //       },
    //       authorization: 'Bearer ' + self.currentUser.tokenKey,
    //       defaultTopic: 'vtp$' + self.currentUser.UserId + '$qa',
    //       defaultTopicTitle: 'Hỏi đáp CSKH',
    //       icon: (new Date().getTime() < 1693069200000) ? '/assets/img/icon/vipo.svg' : '/assets/img/icon/counselors.svg',// event vipo 15-26/8
    //       serviceWorkerURL: '/firebase-messaging-sw.js',
    //       quickQuestions: 'button',
    //       appLinks: ['https://viettelpost.vn', 'https://viettelpost.com.vn', 'https://bit.ly', 'https://www.google.com', 'https://dev-news.viettelpost.vn'],
    //       initTopics: [
    //         {
    //           ref: 'qa',
    //           title: 'Hỏi đáp với CSKH',
    //           icon: 'https://chatbox-dev.okd.viettelpost.vn/chatbox/staff.png',
    //           pinned: true
    //         }],
    //       onOpen: function (ref) {
    //         const deviceToken = localStorage.getItem('deviceToken');
    //         switch (true) {
    //           case ref.startsWith('https://forms.okd.viettelpost.vn'):
    //             formsSDK.open(ref, { utm: { source: 'web' } });
    //             break;
    //           case ref.startsWith('login_interactions') && ref.includes(deviceToken):
    //             this.router.navigateByUrl('/cau-hinh-tai-khoan', { state: { activeTab: 'dsdn' } });
    //             break;
    //           default:
    //             window.open(ref, '_blank');
    //             break;
    //         }
    //       },
    //       onNotifications: function (payload) {
    //         self.notificationService.notify(self.currentUser.tokenKey);
    //       },
    //       templateFn: function (search) {
    //         return Promise.resolve([]);
    //       },
    //       topicEntity: function (topicId) {
    //         return Promise.resolve();
    //       },
    //       onTrackingEvent: ({ event }) => {
    //         this.firebaseService.logEvent(event);
    //       },
    //       title: 'Hỏi đáp CSKH',
    //       onNotification: ({ notification, variant, onOpen }) => {
    //       }
    //     });
    //   } catch (e) { }
    // }
  }

  // checkIsUpdateInformation(pathRedirect?: any) {
  //   const currentPath = window.location.pathname;
  //   let pathCurrentUrl;
  //   this.authenticationService.getUserInfo().subscribe(info => {
  //     this.userInfo = info;
  //     if (this.userInfo && this.userInfo.CUS_ID) {
  //       if (this.isNullOrEmpty(info['ADDRESS'])
  //         && this.isNullOrZero(info['DISTRICT_ID'])
  //         && this.isNullOrZero(info['PROVINCE_ID'])
  //         && this.isNullOrZero(info['WARDS_ID'])) {
  //         if (pathRedirect) {
  //           pathCurrentUrl = pathRedirect.toString();
  //         } else {
  //           pathCurrentUrl = currentPath;
  //         }
  //         if (pathCurrentUrl.includes('tao-don-le')
  //           || pathCurrentUrl.includes('tao-don-hang-voucher')
  //           || pathCurrentUrl.includes('import-excel')
  //           || pathCurrentUrl.includes('excel-online')) {
  //           this.openModalUpdateInformation();
  //         }
  //       }
  //     }
  //   });
  // }

  goToMenu(pathRedirect:any) {
    console.log(pathRedirect,'pathRedirect');
    
    // this.checkIsUpdateInformation(pathRedirect);
    // const currentPath = window.location.pathname;
    // if (currentPath.indexOf(pathRedirect) != -1) return;
    // this.router.navigate([pathRedirect]);
  }

  logout() {
    console.log('logout');

    // this.authenticationService.logout();
  }

  // openModalUpdateInformation() {
  //   $('#vtpModalUpdateInformation').modal('show');
  // }

  // isNullOrZero(value?: any): boolean {
  //   if (!value || value === 0) {
  //     return true;
  //   }
  //   return false;
  // }

  // isNullOrEmpty(value?: any): boolean {
  //   if (!value || value === '') {
  //     return true;
  //   }
  //   return false;
  // }

  // checkRoleVVC() {
  //   if (!this.currentUser) return false;
  //   return this.currentUser.Role == 7 || this.currentUser.Role == 8;
  // }
  // beecost() {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.PHAN_TICH_THI_TRUONG);
  //   this.router.navigate(['/market-analysis']);
  // }
  // donggoi() {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.DONG_GOI_HANG_HOA);
  //   window.open('https://vpp.voso.vn/', 'blank')
  // }
  // checkPhone() {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.QUAN_LY_BAN_HANG);
  //   this.authenticationService.getUserInfo().subscribe(info => {
  //     if (info && info.CUS_ID) {
  //       this.dataInfor = info;
  //       this.onLoad.emit(this.dataInfor);
  //       this.authenticationService.publish({ data: 'vtsale' });
  //       if (!info['PHONE'] && info['PHONE_VALIDATED'] === 0) {
  //         this.openModalUpdateInformation();
  //       } else {
  //         this.getAuthenViettelSale();
  //       }
  //     }
  //   });
  // }
  // getAuthenViettelSale() {
  //   this.httpService.get(AppSettings.API_GET_AUTHEN_VIETTELSALE + 'source=WEB').subscribe(res => {
  //     if (res && res.data) {
  //       const data = res.data.url
  //       window.open(data, 'blank')
  //     }
  //   })
  // }
  // inNhanCanhBao() {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.IN_NHAN_CANH_BAO);
  //   this.router.navigate(['/tien-ich/in-nhan-canh-bao']);
  // }

  // dichVuHoanCuoc() {
  //   this.firebaseService.logEvent(VtContants.FIREBASE_LOG_EVENT.DICH_VU_HOAN_CUOC);
  //   this.router.navigate(['/tien-ich/dich-vu-hoan-cuoc']);
  // }
}
