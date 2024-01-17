import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CategoryManageComponent } from '../category-manage.component';
declare var $: any;

@Component({
  selector: 'menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent extends CategoryManageComponent implements AfterViewInit {
  @Input() menuItems: any[] = [];
  childMenuItems: any;
  menuName: string = '';
  ckDelete: boolean = false;

  handleItems(item: any) {
    console.log(item, 'item');
    this.router.navigateByUrl('/category#' + item.path);
    this.menuName = item.name;
    this.childMenuItems = this.listAllCategories.filter((res: any) => { return res.id === item.id });
    console.log(this.childMenuItems, 'childMenuItems');
    if (this.childMenuItems.length > 0) {
      if (this.childMenuItems[0].children.length > 0) {
        this.menuItems = this.childMenuItems[0].children;
        console.log(this.menuItems, 'this.menuItems111 ');
      }
      console.log(this.menuItems, 'this.menuItems ');
    } else {
      if (this.menuItems[0].children.length > 0) {
        this.menuItems = this.menuItems[0].children;
      }

    }
  }
  deleteCate(item: any) {
    this.ckDelete = true;
    this.categoryDeteil = item;
    setTimeout(() => {
      this.modalService.open('confirmDelete');
    }, 10)
  }
  confirmDelete(event: any) {
    console.log(event, 'event123');
    if (event) {
      this.categoryService.deleteCategory(this.categoryDeteil.id).subscribe((res: any) => {
        if (res) {
          console.log(res, '123');
          this.toastrService.success('Xóa thành công');
          this.modalService.close('confirmDelete');
          this.getListCategory();
        } else {
          this.toastrService.success('Hệ thống bận vui lòng thử lại sau');
        }
      })
    }
  }
  editCate(item: any) {
    this.ckEdit = true
    this.categoryDeteil = item;
    setTimeout(() => {
      this.modalService.open('modalAddCate');
    }, 200)
  }

}
