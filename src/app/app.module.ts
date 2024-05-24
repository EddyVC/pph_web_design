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
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { FeatureOneComponent } from './features/feature-one/feature-one.component';
import { FeatureTwoComponent } from './features/feature-two/feature-two.component';
import { FeatureThreeComponent } from './features/feature-three/feature-three.component';
import { FeatureFourComponent } from './features/feature-four/feature-four.component';
import { FeatureFiveComponent } from './features/feature-five/feature-five.component';
import { FeatureSixComponent } from './features/feature-six/feature-six.component';
import { FeatureSevenComponent } from './features/feature-seven/feature-seven.component';
import { FeatureEightComponent } from './features/feature-eight/feature-eight.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { FeesPaidPageComponent } from './fees-paid-page/fees-paid-page.component';
import { BlogsPageComponent } from './blogs/blogs-page/blogs-page.component';
import { ChoosePphServicePageComponent } from './blogs/choose-pph-service-page/choose-pph-service-page.component';
import { PphSoftwarePowerfulPageComponent } from './blogs/pph-software-powerful-page/pph-software-powerful-page.component';
import { SitesAvaliablesComponent } from './sites-avaliables/sites-avaliables.component';

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
    EposComponent,
    SignUpComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    FeatureFourComponent,
    FeatureFiveComponent,
    FeatureSixComponent,
    FeatureSevenComponent,
    FeatureEightComponent,
    SvgIconComponent,
    FeesPaidPageComponent,
    BlogsPageComponent,
    ChoosePphServicePageComponent,
    PphSoftwarePowerfulPageComponent,
    SitesAvaliablesComponent,
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
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
