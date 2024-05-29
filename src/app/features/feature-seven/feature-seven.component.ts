import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';
import { FeatureSevenPageData } from '../../models/pages-data.model';

@Component({
  selector: 'app-feature-seven',
  templateUrl: './feature-seven.component.html',
  styleUrl: './feature-seven.component.css'
})
export class FeatureSevenComponent {

  pageData: FeatureSevenPageData= new FeatureSevenPageData();

  constructor(
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'software-premiere-pay-per-head')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title_1 = response[0].Value;
          this.pageData.title_2 = response[1].Value;
          this.pageData.description_0 = response[2].Value;
          this.pageData.description_1 = response[3].Value;
          this.pageData.list = response[4].Value.split(',');
          this.pageData.description_2 = response[5].Value;
        }

      })
  }

}
