import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { DemosComponent } from './demos/demos.component';
import { PricingComponent } from './pricing-page/pricing.component';
import { ServicesComponent } from './general/services/services.component';
import { FeaturesComponent } from './general/features/features.component';
import { gsap } from 'gsap';
import { CardsComponent } from './general/cards/cards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentMethodsComponent } from './general/payment-methods/payment-methods.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountDetailsComponent } from './demo-page/account-Details/account-Details.component';
import { DemosComponent } from './demo-page/demos.component';
import { PaymentComponent } from './payment-page/payment.component';
import { PphSoftwareComponent } from './pphSoftware-page/pphSoftware.component';
import { EposComponent } from './epos-page/epos.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

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
    AccountDetailsComponent,
    PaymentComponent,
      PphSoftwareComponent,
      EposComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
