import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseComponent } from 'src/base-component';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss']
})
export class CategoryManageComponent extends BaseComponent implements OnInit {
  listCategories: any[] = [];
  numberShowPages = [10, 20, 40];
  pageIndex: number = 0;
  pageSize: number = 10;
  pageLength: number = 0;
  listAllCategories: any[] = [];

  ngOnInit() {
    this.getListCategory();
    this.categoryService.getAllCategory().subscribe((res) => {
      this.listAllCategories = res;
    })
  }
  
  getListCategory() {
    let params = {
      "page": this.pageIndex,
      "size": this.pageSize
    }
    this.categoryService.getListCategory(params).subscribe((res: any) => {
      if (res && res.data) {
        const data = res.data
        this.listCategories = data.items;
        this.pageLength = data.totalCount;
      } else {
        this.listCategories = [];
      }

    });
  }
  onPaging(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getListCategory();
  }
}
