import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { BaseComponent } from 'src/base-component';
declare var $: any;

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss']
})
export class CategoryManageComponent extends BaseComponent implements OnInit {
  listCategories: any[] = [];
  numberShowPages = [12, 24, 48];
  pageIndex: number = 0;
  pageSize: number = 12;
  pageLength: number = 0;
  listAllCategories: any[] = [];
  createFormCate: FormGroup = new FormGroup({});
  ngOnInit() {
    this.getListCategory();
    this.categoryService.getAllCategory().subscribe((res) => {
      this.listAllCategories = res;
    })
    this.initForm();
  }
  initForm() {
    this.createFormCate = this.formBuilder.group({
      name: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: [1, [Validators.min(1), Validators.max(4)]],
      fileName: ['', [Validators.required]],
      orderNumber: ['', [Validators.required]],
      parentId: ['']
    })
  }
  get f(): any {
    return this.createFormCate.controls;
  }
  checkLevel(){
    if(this.f.level.value > 1){
      const validators = [Validators.required];
      this.f.parentId.setValidators(validators);
      this.f.parentId.markAsTouched();
      this.f.parentId.updateValueAndValidity();
    }else{
      this.f.parentId.clearValidators();
    }
  }
  checkParentId(event: any) {
    let id = event.target.value;
    console.log(id, 'id');
    let isValidId = this.listAllCategories.some((res: any) => res.id == id);
    console.log(isValidId,'checkId');
    this.f.parentId.setValidators(isValidId ? [Validators.required] : null);
    this.f.parentId.markAsTouched();
    this.f.parentId.updateValueAndValidity();
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
  initAddCate() {
    $('#modalAddCate').modal('show');
  }

  addCate() {
    if (this.createFormCate.invalid) {
      this.createFormCate.markAllAsTouched();
      return;
    }
    let params = {
      "name": this.f.name.value,
      "alias": this.f.alias.value,
      "description": this.f.description.value,
      "level": this.f.level.value,
      "fileName": this.f.fileName.value,
      "orderNumber": this.f.orderNumber.value,
      "status": true,
      "parentId": this.f.parentId.value ? this.f.parentId.value : null
    }
    console.log(params, 'params');


  }
  onPaging(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getListCategory();
  }
}
