import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QrCodeModule } from 'ng-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { MenupartComponent } from './menupart/menupart.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    MenupartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
