import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// models
import { Banner } from '../../models/Banner.model';
import { RespInformation } from '../../models/Info.models';
import { PPHSoftwarePageData } from '../../models/data.model';

// global
import { BANNER_PPHSOFTWARE, CAROUSEL_OPTIONS_PPHSOFTWARE } from '../../global/banners.global';

@Component({
  selector: 'app-pph-software',
  templateUrl: './pph-software.component.html',
  styleUrls: ['./pph-software.component.css']
})
export class PphSoftwareComponent implements OnInit {

  softwares: Banner[] = BANNER_PPHSOFTWARE;
  customOptions: OwlOptions = CAROUSEL_OPTIONS_PPHSOFTWARE;

  pageData: PPHSoftwarePageData = new PPHSoftwarePageData();

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit() {
    this.loadInformation();
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pphSofware')
      .subscribe(async (response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title = response[0].Value;
          this.pageData.description = response[1].Value;
          this.pageData.price = await this.loadInformationPrice();
          this.pageData.description = this.pageData.description.replace(/\$5/, this.pageData.price);

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
