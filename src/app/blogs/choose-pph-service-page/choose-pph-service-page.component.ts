import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-choose-pph-service-page',
  templateUrl: './choose-pph-service-page.component.html',
  styleUrl: './choose-pph-service-page.component.css'
})
export class ChoosePphServicePageComponent {

  InformationResp: RespInformation[] = [];
  listPage: Array<string> = [];

  constructor(
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    window.scrollTo(0, 0);
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'choose-pph-service')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0){
          this.listPage = response[3].Value.split(',')
          this.InformationResp = response;
        }

      })
  }

}
