import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/base-component';
declare var $: any;

@Component({
  selector: 'app-modal-add-update-category',
  templateUrl: './modal-add-update-category.component.html',
  styleUrls: ['./modal-add-update-category.component.scss']
})
export class ModalAddUpdateCategoryComponent extends BaseComponent implements OnInit {

  @Input() categoryDeteil: any;
  createFormCate: FormGroup = new FormGroup({});
  listAllCategories: any;
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.listAllCategories = res;
    })
    this.initForm();
  }
  ngAfterViewInit() {
    $('#modalAddCate').on('hidden.bs.modal', () => {
      // Xử lý khi modal được đóng
      console.log(123);

      this.f.name.reset();
      this.f.alias.reset();
      this.f.description.reset();
      this.f.level.reset();
      this.f.fileName.reset();
      this.f.orderNumber.reset();
      this.f.parentId.reset();

    });
  }
  get f(): any {
    return this.createFormCate.controls;
  }
  initForm() {
    this.createFormCate = this.formBuilder.group({
      name: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: [1, [Validators.min(1), Validators.max(4)]],
      fileName: ['', [Validators.required]],
      url: ['', [Validators.required]],
      orderNumber: ['', [Validators.required]],
      parentId: ['']
    })
    if (this.categoryDeteil) {
      this.f.name.value = this.categoryDeteil.name;
      this.f.alias.value = this.categoryDeteil.alias;
      this.f.description.value = this.categoryDeteil.description;
      this.f.level.value = this.categoryDeteil.level;
      this.f.fileName.value = this.categoryDeteil.fileName;
      this.f.url.value = this.categoryDeteil.url;
      this.f.orderNumber.value = this.categoryDeteil.orderNumber;
      this.f.parentId.value = this.categoryDeteil.parentId;
    }
  }
  checkLevel() {
    if (this.f.level.value > 1) {
      const validators = [Validators.required];
      this.f.parentId.setValidators(validators);
      this.f.parentId.markAsTouched();
      this.f.parentId.updateValueAndValidity();
    } else {
      this.f.parentId.clearValidators();
    }
  }
  checkParentId(event: any) {
    let id = event.target.value;
    console.log(id, 'id');
    this.f.parentId.setValidators([this.validatorId(id)]);
    this.f.parentId.markAsTouched();
    this.f.parentId.updateValueAndValidity();
    console.log(this.f.parentId, 'this.f.parentId');

  }
  validatorId(id?: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!id) {
        return { required: true };
      }
      const isValidId = this.listAllCategories.some((res: any) => res.id == id);
      if (!isValidId) {
        return { inValidId: true };
      }
      return null;
    }
  }
  addAndEditCate(type: number) {
    if (this.createFormCate.invalid) {
      this.createFormCate.markAllAsTouched();
      return;
    }
    if (type == 1) {
      this.categoryService.editCategory(this.getParam()).pipe(takeUntil(this._onDestroySub)).subscribe((res: any) => {
        if (res && res.data) {
          this.toastrService.success('Cập nhật thành công');
          this.closeModal();
        } else {
          this.toastrService.success('Hệ thống bận vui lòng thử lại sau');
        }
      })
    } else {
      this.categoryService.createCategory(this.getParam()).pipe(takeUntil(this._onDestroySub)).subscribe((res: any) => {
        if (res && res.data) {
          this.toastrService.success('Thêm mới thành công');
          this.closeModal();
        } else {
          this.toastrService.success('Hệ thống bận vui lòng thử lại sau');
        }
      })
    }



  }
  getParam(): any {
    let params: any = {
      name: this.f.name.value,
      alias: this.f.alias.value,
      description: this.f.description.value,
      level: this.f.level.value,
      fileName: this.f.fileName.value,
      url: this.f.url.value,
      orderNumber: this.f.orderNumber.value,
      status: true,
      parentId: this.f.parentId.value ? this.f.parentId.value : null
    }
    if (this.categoryDeteil) params.id = this.categoryDeteil.id;

    return params;
  }
  closeModal() {
    this.modalService.close('modalAddCate');
  }
}
