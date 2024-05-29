import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { FeatureTwoPageData } from '../../models/pages-data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// components
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrl: './feature-two.component.css'
})
export class FeatureTwoComponent {

  pageData: FeatureTwoPageData = new FeatureTwoPageData();

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
    this.loadInformationContact();
    this.loaderService.showLoader(false);
  }

  async loadInformationContact() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.pageData.phone_number = response[0].Value;

      })
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'best-pay-per-head-software')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0){
          this.pageData.title = response[0].Value;
          this.pageData.description_0 = response[1].Value;
          this.pageData.description_1 = response[2].Value;
        }

      })
  }

  async loadInformationPrice() {
    await this.infoService.getInformation('GENERAL', 'price')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.pageData.price = response[0].Value;

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
