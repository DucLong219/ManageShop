import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';

declare var $: any;
declare const chatbox: any;
declare var formsSDK: any;

@Component({
  selector: 'left-menu',
  templateUrl: 'left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})

export class LeftMenuComponent implements OnInit {
  listCategories: any[] = [];
  constructor(
    public router: Router,
    private categoryService: CategoryService
  ) {
  }
  ngOnInit() {
    // this.getListCategory();
  }

  goToMenu(pathRedirect: any) {
    console.log(pathRedirect, 'pathRedirect');
    this.router.navigate([pathRedirect]);
  }

  logout() {
    console.log('logout');
  }
}
