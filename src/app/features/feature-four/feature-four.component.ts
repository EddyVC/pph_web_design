import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { FeatureFourPageData } from '../../models/pages-data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-feature-four',
  templateUrl: './feature-four.component.html',
  styleUrl: './feature-four.component.css'
})
export class FeatureFourComponent {

  pageData:FeatureFourPageData = new FeatureFourPageData();

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
    await this.infoService.getInformation('GENERAL', 'payperhead')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0){
          this.pageData.title = response[0].Value;
          this.pageData.sub_title = response[1].Value;
          this.pageData.description_0 = response[2].Value;
          this.pageData.description_1 = response[3].Value;
          this.pageData.description_2 = response[4].Value;
        }

      })
  }

}
