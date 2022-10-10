import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {UserComponent} from './User-Details/user.component';
import {SummaryComponent} from './Summary/summary.component';
import {ProductComponent} from './Products/products.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, UserComponent, SummaryComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
