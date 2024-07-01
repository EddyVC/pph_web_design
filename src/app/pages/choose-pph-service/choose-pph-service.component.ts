import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { ChoosePPHServicePageData } from '../../models/data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-choose-pph-service',
  templateUrl: './choose-pph-service.component.html',
  styleUrl: './choose-pph-service.component.css'
})

export class ChoosePphServicePageComponent {

  pageData: ChoosePPHServicePageData = new ChoosePPHServicePageData();

  constructor(
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    window.scrollTo(0, 0);
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'choose-pph-service')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title = response[0].Value;
          this.pageData.description_0 = response[1].Value;
          this.pageData.description_1 = response[2].Value;
          this.pageData.list = response[3].Value.split(',');
          this.pageData.description_2 = response[4].Value;
          this.pageData.description_3 = response[5].Value;
          this.pageData.description_4 = response[6].Value;

          this.loaderService.showLoader(false);
        }

      })
  }

}
