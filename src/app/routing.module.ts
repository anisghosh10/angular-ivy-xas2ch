import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './User-Details/user.component';
import { ProductComponent } from './Products/products.component';
import {SummaryComponent} from './Summary/summary.component';

const routes:Routes=[{path:'user',component:UserComponent},{path:'products',component:ProductComponent},{path:'summary',component:SummaryComponent}]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}