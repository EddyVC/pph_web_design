import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DemosComponent } from './demo-page/demos.component';
import { PricingComponent } from './pricing-page/pricing.component';
import { PaymentComponent } from './payment-page/payment.component';
import { PphSoftwareComponent } from './pphSoftware-page/pphSoftware.component';
import { EposComponent } from './epos-page/epos.component';
import { FeatureOneComponent } from './features/feature-one/feature-one.component';
import { FeatureTwoComponent } from './features/feature-two/feature-two.component';
import { FeatureThreeComponent } from './features/feature-three/feature-three.component';
import { FeatureFourComponent } from './features/feature-four/feature-four.component';
import { FeatureFiveComponent } from './features/feature-five/feature-five.component';
import { FeatureSixComponent } from './features/feature-six/feature-six.component';
import { FeatureSevenComponent } from './features/feature-seven/feature-seven.component';
import { FeatureEightComponent } from './features/feature-eight/feature-eight.component';
import { FeesPaidPageComponent } from './fees-paid-page/fees-paid-page.component';
import { BlogsPageComponent } from './blogs/blogs-page/blogs-page.component';
import { PphSoftwarePowerfulPageComponent } from './blogs/pph-software-powerful-page/pph-software-powerful-page.component';
import { ChoosePphServicePageComponent } from './blogs/choose-pph-service-page/choose-pph-service-page.component';
import { SitesAvaliablesPageComponent } from './sites-avaliables-page/sites-avaliables-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pphSofware', component: PphSoftwareComponent },
  { path: 'epos', component: EposComponent },
  { path: 'pay-per-head-software', component: FeatureOneComponent },
  { path: 'best-pay-per-head-software', component: FeatureTwoComponent },
  { path: 'pph-software-for-bookies', component: FeatureThreeComponent },
  { path: 'payperhead', component: FeatureFourComponent },
  { path: 'pph-software-for-sportsbooks', component: FeatureFiveComponent },
  { path: 'pph-sportsbook-software', component: FeatureSixComponent },
  { path: 'best-pph-sportsbook-&-bookie-software-premiere-pay-per-head', component: FeatureSevenComponent },
  { path: 'software-for-sportsbook', component: FeatureEightComponent },
  { path: 'fees-paid', component: FeesPaidPageComponent },
  { path: 'how-to-become-a-bookie', component: BlogsPageComponent },
  { path: 'how-to-revolutionize-your-sportsbook-book-making-business', component: BlogsPageComponent },
  { path: 'how-to-stay-ahead-of-the-game-in-bookmaking', component: BlogsPageComponent },
  { path: 'pay-per-head', component: BlogsPageComponent },
  { path: 'pay-per-head-sportsbook-services-for-local-bookies', component: BlogsPageComponent },
  { path: 'take-your-bookmaking-services-at-a-slow-but-steady-pace', component: BlogsPageComponent },
  { path: 'sportsbook', component: BlogsPageComponent },
  { path: 'real-reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering', component: BlogsPageComponent },
  { path: 'reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering', component: BlogsPageComponent },
  { path: 'why-the-best-pay-per-head-gives-you-and-your-customers-a-special-edge-in-online-games-book-wagering', component: BlogsPageComponent },
  { path: 'why-your-online-bookie-business-needs-pay-per-head', component: BlogsPageComponent },
  { path: 'pay-per-head-knowledge-base', component: BlogsPageComponent },
  { path: 'the-reason-why-are-the-best-pay-per-head-software', component: BlogsPageComponent },
  { path: 'pph-software-powerful-tool', component: PphSoftwarePowerfulPageComponent },
  { path: 'choose-pph-service', component: ChoosePphServicePageComponent },
  { path: 'sites-avaliables', component: SitesAvaliablesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
