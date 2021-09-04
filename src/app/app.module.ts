import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const WooCommerce = new WooCommerceRestApi({
  url:"https://theweldersdog.com.au",
  consumerKey: 'ck_9036775c5b6869a39e3d087f106b94608523caa3',
  consumerSecret: 'cs_e6c49401eaa1a4b4f9d6f3a1d22260ffa4140688',
  version: 'wc/v3'
})
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
