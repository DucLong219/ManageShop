import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/base-component';
declare var $: any;

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss']
})
export class CategoryManageComponent extends BaseComponent implements  OnInit {
  listCategories: any[] = [];
  numberShowPages = [12, 24, 48];
  pageIndex: number = 0;
  pageSize: number = 12;
  pageLength: number = 0;
  listAllCategories: any[] = [];
  ckEdit: boolean = false;
  categoryDeteil: any;

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.listAllCategories = res;
    })
    this.initForm();
  }
  initForm() {
    this.getListCategory();
  }

  ckEvent(event:any){
    if(event){
      this.ckEdit = false
    }
  }
  getListCategory() {
    let params = {
      "page": this.pageIndex + 1,
      "size": this.pageSize
    }
    this.categoryService.getListCategory(params).pipe(takeUntil(this._onDestroySub)).subscribe((res: any) => {
      if (res && res.data) {
        const data = res.data
        this.listCategories = data.items;
        this.pageLength = data.totalCount;
      } else {
        this.listCategories = [];
      }

    });
  }
  initAddCate() {
    this.ckEdit = true;
    this.modalService.open('modalAddCate');
  }

  onPaging(event: PageEvent) {
    console.log(event.pageIndex, 'event.pageIndex');

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getListCategory();
  }

}
