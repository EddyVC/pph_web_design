import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DemosComponent } from './demo-page/demos.component';
import { PricingComponent } from './pricing-page/pricing.component';
import { PaymentComponent } from './payment-page/payment.component';
import { PphSoftwareComponent } from './pphSoftware-page/pphSoftware.component';
import { EposComponent } from './epos-page/epos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pphSofware', component: PphSoftwareComponent },
  { path: 'epos', component: EposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
