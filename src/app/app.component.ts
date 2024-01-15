import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private categoryService:CategoryService
  ) {
  }
  ngOnInit(): void {
    this.getListAllCategory();
  }
  getListAllCategory(){
    this.categoryService.getListAllCategory().subscribe((res:any)=>{
      if(res){
        console.log(res,'resabc');
        
        this.categoryService.next(res.data);
      }
    })
  }
}
