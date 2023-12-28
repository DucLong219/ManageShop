import { Component } from '@angular/core';
import { ApiSettingService } from 'src/services/api.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiSettingService) {
    this.apiService.get().subscribe((res)=>{
      console.log(123);
      
    })
   }
}
