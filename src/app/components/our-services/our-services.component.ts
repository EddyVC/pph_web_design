import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  InformationPrice: string = '';
  InformationResp : RespInformation[] = [];

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'service')
    .subscribe(async (response: RespInformation[]) => {

      if (response.length > 0) {
        this.InformationPrice = await this.loadInformationPrice();
        this.InformationResp = response;
        this.loaderService.showLoader(false);
      }

    })
  }

  async loadInformationPrice() {
    let price: string = '';
    await this.infoService.getInformation('GENERAL', 'price').toPromise()
      .then((response: any) => {

        if (response.length > 0)
          price = response[0].Value;

      })
    return price;
  }

}
