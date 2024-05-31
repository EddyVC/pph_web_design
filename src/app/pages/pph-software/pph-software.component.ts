import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// models
import { Banner } from '../../models/Banner.model';
import { RespInformation } from '../../models/Info.models';

import { BANNER_PPHSOFTWARE, CAROUSEL_OPTIONS_PPHSOFTWARE } from '../../global/banners.global';

@Component({
  selector: 'app-pph-software',
  templateUrl: './pph-software.component.html',
  styleUrls: ['./pph-software.component.css']
})
export class PphSoftwareComponent implements OnInit {

  softwares: Banner[] = BANNER_PPHSOFTWARE;
  customOptions: OwlOptions = CAROUSEL_OPTIONS_PPHSOFTWARE;

  title: string = ''
  description: string = ''

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit() {
    this.loadInformation();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pphSofware')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.title = response[0].Value;
          this.description = response[1].Value;
        }

      })
  }

}
