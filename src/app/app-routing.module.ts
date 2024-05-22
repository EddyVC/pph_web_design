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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
