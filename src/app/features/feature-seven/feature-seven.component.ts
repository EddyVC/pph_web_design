import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-feature-seven',
  templateUrl: './feature-seven.component.html',
  styleUrl: './feature-seven.component.css'
})
export class FeatureSevenComponent {

  InformationResp: RespInformation[] = [];
  listPage: Array<string> = [];

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
          this.listPage = response[4].Value.split(',');
          this.InformationResp = response;
        }

      })
  }

}
