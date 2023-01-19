import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductEffect } from './product.effect';
import { reducers } from './index';
import { NewscreenComponent } from './newscreen/newscreen.component';
import { ListComponent } from './list/list.component';


const appRoutes: Routes = [
  {path: '', component: ListComponent , pathMatch :"full"},
  {path: 'new', component: NewscreenComponent }

];
@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(appRoutes),
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([ProductEffect])
   ],
  declarations: [ AppComponent, NewscreenComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
