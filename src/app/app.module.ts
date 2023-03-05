import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QrCodeModule } from 'ng-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemcategoryComponent } from './itemcategory/itemcategory.component';
import { ItemsComponent } from './items/items.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    ItemcategoryComponent,
    ItemsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    NgbModule,
    NgbRatingModule,
    NgbAccordionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
