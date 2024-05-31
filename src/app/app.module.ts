import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routes
import { AppRoutingModule } from './app-routing.module';

// carousel
import { CarouselModule } from 'ngx-owl-carousel-o';

// videogular
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

// pages
import { DemosComponent } from './pages/demos/demos.component';
import { FeesPaidComponent } from './pages/fees-paid/fees-paid.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BlogsPageComponent } from './pages/blogs/blogs.component';
import { PphSoftwareComponent } from './pages/pph-software/pph-software.component';
import { SitesAvaliablesPageComponent } from './pages/sites-avaliables/sites-avaliables.component';
import { ChoosePphServicePageComponent } from './pages/choose-pph-service/choose-pph-service.component';
import { PphSoftwarePowerfulPageComponent } from './pages/pph-software-powerful/pph-software-powerful.component';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CardsComponent } from './components/cards/cards.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurFeaturesComponent } from './components/our-features/our-features.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { FeaturesComponent } from './pages/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemosComponent,
    PricingComponent,
    OurServicesComponent,
    OurFeaturesComponent,
    CardsComponent,
    PaymentMethodsComponent,
    AccountDetailsComponent,
    PaymentComponent,
    PphSoftwareComponent,
    SignUpComponent,
    FeesPaidComponent,
    BlogsPageComponent,
    ChoosePphServicePageComponent,
    PphSoftwarePowerfulPageComponent,
    LoaderComponent,
    SitesAvaliablesPageComponent,
    FrequentlyAskedQuestionsComponent,
    FeaturesComponent,
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
