import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DemosComponent } from './demos/demos.component';
import { PricingComponent } from './pricing-page/pricing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'pricing', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
