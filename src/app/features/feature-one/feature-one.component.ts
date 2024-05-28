import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// components
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrl: './feature-one.component.css'
})
export class FeatureOneComponent {

  phoneNumber: string = '';
  InformationPrice: string = '';
  InformationResp: RespInformation[] = [];

  constructor(
    private appComponent: AppComponent,
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
    this.loadInformationPrice();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pay-per-head-software')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.InformationResp = response;

      })
  }

  async loadInformationPrice() {
    await this.infoService.getInformation('GENERAL', 'price')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.InformationPrice = response[0].Value;

      })
  }

  async loadInformationContact() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.phoneNumber = response[0].Value;
        }

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
