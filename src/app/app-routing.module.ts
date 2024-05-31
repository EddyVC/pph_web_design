
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { DemosComponent } from './pages/demos/demos.component';
import { BlogsPageComponent } from './pages/blogs/blogs.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FeaturesComponent } from './pages/features/features.component';
import { FeesPaidComponent } from './pages/fees-paid/fees-paid.component';
import { PphSoftwareComponent } from './pages/pph-software/pph-software.component';
import { SitesAvaliablesPageComponent } from './pages/sites-avaliables/sites-avaliables.component';
import { ChoosePphServicePageComponent } from './pages/choose-pph-service/choose-pph-service.component';
import { PphSoftwarePowerfulPageComponent } from './pages/pph-software-powerful/pph-software-powerful.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pphSofware', component: PphSoftwareComponent },
  { path: 'pay-per-head-software', component: FeaturesComponent },
  { path: 'best-pay-per-head-software', component: FeaturesComponent },
  { path: 'pph-software-for-bookies', component: FeaturesComponent },
  { path: 'payperhead', component: FeaturesComponent },
  { path: 'pph-software-for-sportsbooks', component: FeaturesComponent },
  { path: 'pph-sportsbook-software', component: FeaturesComponent },
  { path: 'best-pph-sportsbook-&-bookie-software-premiere-pay-per-head', component: FeaturesComponent },
  { path: 'software-for-sportsbook', component: FeaturesComponent },
  { path: 'fees-paid', component: FeesPaidComponent  },
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
  { path: 'sites-avaliables', component: SitesAvaliablesPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
