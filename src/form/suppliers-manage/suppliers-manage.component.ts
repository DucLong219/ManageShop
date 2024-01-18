import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/base-component';
import { DialogConfirmComponent } from 'src/component/dialog-confirm/dialog-confirm.component';
import { AppSettings } from 'src/services/api.config';



@Component({
  selector: 'app-suppliers-manage',
  templateUrl: './suppliers-manage.component.html',
  styleUrls: ['./suppliers-manage.component.scss']
})


export class SuppliersManageComponent extends BaseComponent implements OnInit {
  suppilerColumns: string[] = AppSettings.suppliersColumn;
  // dataSource: any;
  listData: any[] = [];
  numberShowPages = [4, 6, 10];
  pageIndex: number = 0;
  pageSize: number = 4;
  pageLength: number = 0;
  dataSource: any = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.searchSuppliers();
  }
  sortData(sortData: Sort) {
    console.log(sortData, 'sortData');
    console.log(this.dataSource, 'data');
    this.dataSource.paginator = this.paginator;

    if (!sortData.active || sortData.direction === '') {
      this.sort = this.dataSource;
      return;
    }

    this.dataSource.data = this.dataSource.data.sort((a: any, b: any) => {
      const isAsc = sortData.direction === 'asc';
      switch (sortData.active) {
        case 'CODE_SUPPILER':
          return this.compare(a.code, b.code, isAsc);
        case 'NAME_SUPPILER':
          return this.compare(a.name, b.name, isAsc);
        case 'ALIAS_SUPPILER':
          return this.compare(a.alias, b.alias, isAsc);
        default:
          return 0;
      }
    });

  }
  searchSuppliers() {
    let params = {
      "page": this.pageIndex,
      "size": this.pageSize
    }
    this.supplierService.searchSupplier(params).pipe(takeUntil(this._onDestroySub))
      .subscribe((res: any) => {
        if (res && res.data) {
          this.listData = res.data.items;
          this.dataSource = new MatTableDataSource(this.listData)
          this.pageLength = res.data.totalCount;
          console.log(this.listData);

        } else {
          this.listData = [];
        }
      }
      )
  }
  onPaging(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.searchSuppliers();
  }
  listChecked: any[] = []
  listCheckedAll: any[] = []
  selection: any = new SelectionModel<any>(true, []);
  initDeleteMul() {
    console.log(this.listChecked, 'listchecked');
    this.openConfirmDialog();
  }

  checkAll(event: any) {
    if (event.checked) {
      this.selection.clear();
      this.listChecked = [...this.listData];
      this.listChecked.forEach((item: any) => this.selection.select(item));
    } else {
      this.selection.clear();
      this.listChecked = [];
    }
  }

  // Kiểm tra xem đã chọn tất cả hay chưa
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.listData.length;
    return numSelected === numRows;
  }

  checkOne(element: any) {
    const selectElement = this.selection.isSelected(element.id);
    console.log(selectElement, 'selectElement');
    if (selectElement) {
      this.selection.deselect(element.id);
      if (this.listChecked.length > 0) {
        this.listChecked = this.listChecked.filter(x => x.id !== element.id);
      }
    } else {
      this.selection.select(element.id);
      const isExistSelected = this.listChecked.filter(x => x.id === element.id)[0];
      if (!isExistSelected) {
        this.listChecked.push(element);
      }
    }
    console.log(this.listChecked, ' this.listChecked this.listChecked');

  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '450px',
      data: {
        title: 'Xác nhận xoá',
        message: 'Bạn có chắc chắn muốn xoá không?',
        callback: () => this.initDelete(this.listChecked)
      },
    });
  }
  initEdit(item: any) { }

  initDelete(items: any[]) {
    items.forEach(item => {
      this.supplierService.deleteSupplier(item.id).subscribe((res: any) => {
        if (res) {
          console.log(res, '123');
          this.toastrService.success('Xóa thành công');
          this.modalService.close('confirmDelete');
          this.searchSuppliers()
        } else {
          this.toastrService.success('Hệ thống bận vui lòng thử lại sau');
        }
      });
    });
  }


  initAddSuppiler() {

  }
  closePopup() { }
  deleteSuppiler() { }
}
