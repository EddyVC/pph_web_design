import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DemosComponent } from './demos/demos.component';
import { PricingComponent } from './pricing-page/pricing.component';
import { ServicesComponent } from './general/services/services.component';
import { FeaturesComponent } from './general/features/features.component';
import { gsap } from 'gsap';
import { CardsComponent } from './general/cards/cards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentMethodsComponent } from './general/payment-methods/payment-methods.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountDetailsComponent } from './demos/account-Details/account-Details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    DemosComponent,
    PricingComponent,
    ServicesComponent,
    FeaturesComponent,
    CardsComponent,
    PaymentMethodsComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
