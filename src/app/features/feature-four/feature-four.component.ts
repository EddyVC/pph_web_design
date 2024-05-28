import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-feature-four',
  templateUrl: './feature-four.component.html',
  styleUrl: './feature-four.component.css'
})
export class FeatureFourComponent {

  InformationResp: RespInformation[] = [];

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

        if (response.length > 0)
          this.InformationResp = response;

      })
  }

}
