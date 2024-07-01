import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  InformationPrice: string = '';

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit() {
    this.loadInformationPrice();
  }

  async loadInformationPrice() {
    await this.infoService.getInformation('GENERAL', 'price')
      .subscribe((response: RespInformation[]) => {
        if (response.length > 0) {

          this.InformationPrice = response[0].Value;
          this.loaderService.showLoader(false);

        }
      })
  }

}
