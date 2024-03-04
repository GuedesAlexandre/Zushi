import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './component/footer/footer.component';
import { 404Component } from './component/404/404.component';
=======
import { NgOptimizedImage } from "@angular/common";
import { LandingComponent } from './component/landing/landing.component';
import { __importDefault } from 'tslib'; // Add this import statement
import { FooterComponent } from './component/footer/footer.component';
import { HeaderStaticComponent } from './component/header-static/header-static.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBoxComponent,
<<<<<<< HEAD
    FooterComponent,
    404Component
=======
    LandingComponent,
    FooterComponent,
    HeaderStaticComponent,
>>>>>>> main
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
