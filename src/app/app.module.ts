import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSpidermanComponent } from './components/header-spiderman/header-spiderman.component';
import { RegisterSpidermanComponent } from './components/register-spiderman/register-spiderman.component';
import { NewsletterSpidermanComponent } from './components/newsletter-spiderman/newsletter-spiderman.component';
import { FooterSpidermanComponent } from './components/footer-spiderman/footer-spiderman.component';
import { ContentSpidermanComponent } from './components/content-spiderman/content-spiderman.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdversairesSpidermanComponent } from './components/adversaires-spiderman/adversaires-spiderman.component';
import { HerosSpidermanComponent } from './components/heros-spiderman/heros-spiderman.component';
import { AproposSpidermanComponent } from './components/apropos-spiderman/apropos-spiderman.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSpidermanComponent,
    RegisterSpidermanComponent,
    NewsletterSpidermanComponent,
    FooterSpidermanComponent,
    ContentSpidermanComponent,
    AdversairesSpidermanComponent,
    HerosSpidermanComponent,
    AproposSpidermanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
