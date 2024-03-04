import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from "@angular/common";
import { LandingComponent } from './component/landing/landing.component';
import { __importDefault } from 'tslib'; // Add this import statement
import { FooterComponent } from './component/footer/footer.component';
import { HeaderStaticComponent } from './component/header-static/header-static.component';
import { HeroComponent } from './component/hero/hero.component';

import { ErrorComponent } from './component/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBoxComponent,
    LandingComponent,
    FooterComponent,
    HeaderStaticComponent,
    ErrorComponent,
    
    HeroComponent,
    
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
