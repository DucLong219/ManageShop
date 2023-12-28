
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  }
  ,
  // otherwise redirect to home
  // { path: '**', redirectTo: 'home' }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
