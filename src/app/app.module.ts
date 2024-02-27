import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {NgOptimizedImage} from "@angular/common";
import { HeaderStaticComponent } from './component/header-static/header-static.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBoxComponent,
    HeaderStaticComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
