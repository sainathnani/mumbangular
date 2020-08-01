import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
