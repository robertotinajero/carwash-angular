import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CoverComponent } from './components/sections/cover/cover.component';
import { PricingComponent } from './components/sections/pricing/pricing.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { AboutComponent } from './components/sections/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/sections/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoverComponent,
    PricingComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
