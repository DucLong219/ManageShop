import { Component, Input, OnInit } from '@angular/core';
import { CategoryManageComponent } from '../category-manage.component';
import { BaseComponent } from 'src/base-component';

@Component({
  selector: 'menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent extends CategoryManageComponent implements OnInit {
  @Input() menuItems: any[] = [];
  childMenuItems: any;
  menuName: string = '';
  handleItems(item: any) {
    console.log(item, 'item');
    this.router.navigateByUrl('/category#'+item.path);
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
  back() {

  }

}
